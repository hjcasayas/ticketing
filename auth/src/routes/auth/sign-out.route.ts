import { Router, Request, Response } from "express";

const router = Router();

router.post('/sign-out', (req: Request, res: Response) => {
    res.json({ message: 'sign out works' });
});

export { router as SignOutRouter };