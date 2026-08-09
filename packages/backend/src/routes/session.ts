import { Router, Request, Response } from 'express';
import { Session } from '../models/session';
import { v4 as uuidv4 } from 'uuid';

// In‑memory store for sessions – for now, replace with MongoDB later.
const sessionStore = new Map<string, Session>();

const router = Router();

/**
 * Create a new session.
 * Expects JSON body: { title: string, createdBy: string }
 * Returns: { sessionCode: string }
 */
router.post('/sessions', (req: Request, res: Response) => {
  const { title, createdBy } = req.body;
  if (!title || !createdBy) {
    return res.status(400).json({ error: 'title and createdBy are required' });
  }
  const sessionCode = uuidv4();
  const now = new Date();
  const session: Session = {
    id: uuidv4(),
    sessionCode,
    title,
    createdBy,
    createdAt: now,
    updatedAt: now,
    columns: [],
    clusters: [],
    actionItems: [],
  };
  sessionStore.set(sessionCode, session);
  return res.status(201).json({ sessionCode });
});

/**
 * Load an existing session by its code.
 */
router.get('/sessions/:code', (req: Request, res: Response) => {
  const { code } = req.params;
  const session = sessionStore.get(code);
  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }
  return res.json(session);
});

export default router;
