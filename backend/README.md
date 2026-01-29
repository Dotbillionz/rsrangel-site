# CrownOps API

## Getting Started

```bash
cd backend
npm install
npm run dev
```

Set environment variables via `.env`:

```
PORT=4000
CORS_ORIGIN=http://localhost:3000
RATE_LIMIT_MAX=120
GITHUB_WEBHOOK_SECRET=replace-me
```

## Routes

- `GET /health` — liveness probe
- `POST /webhooks/github` — GitHub webhook ingress with signature verification
