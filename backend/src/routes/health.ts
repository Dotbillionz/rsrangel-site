import type { Request, Response } from 'express';
import { Router } from 'express';

export const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
