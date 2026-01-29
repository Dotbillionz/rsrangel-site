import { Router } from 'express'

import { config } from '../config/env.js'
import { verifySignature } from '../utils/github-signature.js'
import { handlePipelineTrigger } from '../services/pipeline-service.js'

export const githubRouter = Router()

githubRouter.post('/', (req, res) => {
  const signature = req.headers['x-hub-signature-256']
  const rawBody = JSON.stringify(req.body)

  if (!verifySignature(rawBody, signature, config.githubWebhookSecret)) {
    return res.status(401).json({ error: 'Invalid signature' })
  }

  const event = req.headers['x-github-event']
  const deliveryId = req.headers['x-github-delivery']

  handlePipelineTrigger({ event, deliveryId, payload: req.body })

  res.status(202).json({ received: true })
})
