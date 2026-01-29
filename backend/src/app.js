import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'

import { githubRouter } from './routes/github.js'
import { notionRouter } from './routes/notion.js'
import { automationRouter } from './routes/automation.js'

export const buildApp = () => {
  const app = express()

  app.use(helmet())
  app.use(cors())
  app.use(express.json({ limit: '2mb' }))
  app.use(morgan('combined'))

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
  })

  app.use('/webhooks/github', githubRouter)
  app.use('/integrations/notion', notionRouter)
  app.use('/automations', automationRouter)

  app.use((err, _req, res, _next) => {
    console.error('Unhandled error', err)
    res.status(500).json({ error: 'Internal server error' })
  })

  return app
}
