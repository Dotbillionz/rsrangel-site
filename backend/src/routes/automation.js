import { Router } from 'express'

import { sendEscalation } from '../services/notification-service.js'

export const automationRouter = Router()

automationRouter.post('/alerts', async (req, res) => {
  try {
    const { severity = 'info', message } = req.body
    if (!message) {
      return res.status(400).json({ error: 'Message is required' })
    }

    await sendEscalation({ severity, message })
    res.status(202).json({ dispatched: true })
  } catch (error) {
    console.error('Failed to dispatch alert', error)
    res.status(500).json({ error: 'Failed to dispatch alert' })
  }
})
