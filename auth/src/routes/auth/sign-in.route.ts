import { Router, Request, Response } from "express";

const router = Router();

router.post('/sign-in', (req: Request, res: Response) => {
    res.json({ message: 'sign in works' });
});

export { router as SignInRouter };