# GitHub Webhook Configuration

1. Deploy the CrownOps backend (see `backend/`) to an internet-accessible environment.
2. Set the `GITHUB_WEBHOOK_SECRET` environment variable to a strong secret.
3. In GitHub, navigate to **Settings → Webhooks → Add webhook** for the repository you want to monitor.
4. Use the backend URL `https://<your-domain>/webhooks/github` as the payload URL.
5. Choose the `application/json` content type and reuse the secret from step 2.
6. Subscribe to the following events to enable CI/CD automation:
   - `push`
   - `pull_request`
   - `deployment`
7. Save the webhook and trigger a test delivery. The backend will respond with HTTP 202 and log the event delivery identifier.
