import axios from 'axios'

import { config } from '../config/env.js'

const severityEmoji = {
  critical: '🚨',
  high: '🔥',
  medium: '⚠️',
  info: 'ℹ️'
}

export const sendEscalation = async ({ severity, message }) => {
  const payload = {
    text: `${severityEmoji[severity] ?? 'ℹ️'} ${message}`
  }

  if (config.slackWebhookUrl) {
    await safePost(config.slackWebhookUrl, payload)
  }

  if (config.telemetry.telegram.botToken && config.telemetry.telegram.alertChatId) {
    await sendTelegramAlert({ severity, message })
  }
}

const safePost = async (url, data) => {
  try {
    await axios.post(url, data)
  } catch (error) {
    console.error('Notification dispatch failed', url, error.message)
  }
}

const sendTelegramAlert = async ({ severity, message }) => {
  const url = `https://api.telegram.org/bot${config.telemetry.telegram.botToken}/sendMessage`
  try {
    await axios.post(url, {
      chat_id: config.telemetry.telegram.alertChatId,
      text: `${severity.toUpperCase()} | ${message}`
    })
  } catch (error) {
    console.error('Failed to send Telegram alert', error.message)
  }
}
