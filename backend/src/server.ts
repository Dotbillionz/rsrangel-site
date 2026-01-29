import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

import { router as healthRouter } from './routes/health.js';
import { router as githubRouter } from './routes/github.js';

declare module 'express-serve-static-core' {
  interface Request {
    rawBody?: string;
  }
}

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN ?? '*', credentials: true }));
app.use(
  express.json({
    limit: '1mb',
    verify: (req, _res, buffer) => {
      req.rawBody = buffer.toString('utf8');
    }
  })
);
app.use(
  rateLimit({
    windowMs: 60 * 1000,
    limit: Number(process.env.RATE_LIMIT_MAX ?? 60),
    standardHeaders: true,
    legacyHeaders: false
  })
);

app.use('/health', healthRouter);
app.use('/webhooks/github', githubRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

const port = Number(process.env.PORT ?? 4000);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API server listening on port ${port}`);
});
