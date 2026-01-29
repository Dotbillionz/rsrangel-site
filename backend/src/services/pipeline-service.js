import axios from 'axios'

import { config } from '../config/env.js'

export const handlePipelineTrigger = async ({ event, deliveryId, payload }) => {
  console.log('Received GitHub event', { event, deliveryId })

  if (event === 'push' || event === 'pull_request') {
    await triggerDeployments(payload)
  }
}

const triggerDeployments = async (payload) => {
  const results = []

  if (config.deployments.vercelHook) {
    results.push(postWebhook(config.deployments.vercelHook, payload))
  }

  if (config.deployments.replitHook) {
    results.push(postWebhook(config.deployments.replitHook, payload))
  }

  await Promise.allSettled(results)
}

const postWebhook = async (url, payload) => {
  try {
    await axios.post(url, payload)
    console.log('Triggered webhook', url)
  } catch (error) {
    console.error('Failed to trigger webhook', url, error.message)
  }
}
