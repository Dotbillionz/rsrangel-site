import { Router } from 'express'

import { syncNotionTasks } from '../services/notion-service.js'

export const notionRouter = Router()

notionRouter.post('/sync', async (_req, res) => {
  try {
    const summary = await syncNotionTasks()
    res.json(summary)
  } catch (error) {
    console.error('Notion sync failed', error)
    res.status(500).json({ error: 'Failed to sync Notion tasks' })
  }
})
