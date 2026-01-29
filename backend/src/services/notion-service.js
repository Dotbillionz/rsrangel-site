import axios from 'axios'

import { config } from '../config/env.js'

const NOTION_API_URL = 'https://api.notion.com/v1'
const NOTION_VERSION = '2022-06-28'

export const syncNotionTasks = async () => {
  if (!config.notion.apiKey || !config.notion.databaseId) {
    throw new Error('Notion configuration is missing')
  }

  const response = await axios.post(
    `${NOTION_API_URL}/databases/${config.notion.databaseId}/query`,
    {},
    {
      headers: {
        Authorization: `Bearer ${config.notion.apiKey}`,
        'Notion-Version': NOTION_VERSION
      }
    }
  )

  const items = response.data.results.map((page) => ({
    id: page.id,
    title: page.properties?.Name?.title?.[0]?.plain_text ?? 'Untitled',
    status: page.properties?.Status?.status?.name ?? 'Unknown'
  }))

  return {
    count: items.length,
    items
  }
}
