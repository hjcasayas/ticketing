import { Router, Request, Response } from "express";

const router = Router();

router.get('/current-user', (req: Request, res: Response) => {
    res.json({ message: 'current user works' });
});

export { router as CurrentUserRouter };