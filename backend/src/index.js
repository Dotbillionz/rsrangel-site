import { buildApp } from './app.js'
import { config } from './config/env.js'

const app = buildApp()

app.listen(config.port, () => {
  console.log(`CrownOps backend listening on port ${config.port}`)
})
