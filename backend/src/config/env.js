import dotenv from 'dotenv'

const env = process.env.NODE_ENV || 'development'

if (env !== 'production') {
  dotenv.config()
}

export const config = {
  env,
  port: process.env.PORT || 4000,
  githubWebhookSecret: process.env.GITHUB_WEBHOOK_SECRET,
  slackWebhookUrl: process.env.SLACK_WEBHOOK_URL,
  notion: {
    apiKey: process.env.NOTION_API_KEY,
    databaseId: process.env.NOTION_DATABASE_ID
  },
  telemetry: {
    telegram: {
      botToken: process.env.TELEGRAM_BOT_TOKEN,
      alertChatId: process.env.TELEGRAM_ALERT_CHAT_ID
    }
  },
  deployments: {
    vercelHook: process.env.VERCEL_DEPLOY_HOOK_URL,
    replitHook: process.env.REPLIT_WEBHOOK_URL
  }
}
