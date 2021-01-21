import { Router } from "express";
import { CurrentUserRouter } from "./current-user.route";
import { SignInRouter } from "./sign-in.route";
import { SignUpRouter } from "./sign-up.route";
import { SignOutRouter } from "./sign-out.route";

const router = Router();

router.use('/api/auth', CurrentUserRouter);
router.use('/api/auth', SignOutRouter);
router.use('/api/auth', SignUpRouter);
router.use('/api/auth', SignInRouter);

export { router as AuthRouter };