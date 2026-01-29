import crypto from 'crypto';
import type { Request, Response } from 'express';
import { Router } from 'express';

const SIGNATURE_HEADER = 'x-hub-signature-256';
const EVENT_HEADER = 'x-github-event';

export const router = Router();

function timingSafeEqual(a: string, b: string) {
  const signatureA = Buffer.from(a);
  const signatureB = Buffer.from(b);

  if (signatureA.length !== signatureB.length) {
    return false;
  }

  return crypto.timingSafeEqual(signatureA, signatureB);
}

function verifySignature(req: Request, payload: string) {
  const signature = req.header(SIGNATURE_HEADER);
  const secret = process.env.GITHUB_WEBHOOK_SECRET;

  if (!signature || !secret) {
    return false;
  }

  const hmac = crypto.createHmac('sha256', secret);
  const digest = `sha256=${hmac.update(payload).digest('hex')}`;

  return timingSafeEqual(signature, digest);
}

router.post('/', (req: Request, res: Response) => {
  const payload = req.rawBody ?? JSON.stringify(req.body ?? {});

  if (!verifySignature(req, payload)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  const event = req.header(EVENT_HEADER) ?? 'unknown';

  // TODO: enqueue CI/CD job dispatch here

  return res.status(202).json({ received: true, event });
});
