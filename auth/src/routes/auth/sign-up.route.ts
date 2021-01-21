import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { DatabaseConnectionError, RequestValidationError } from "../../errors";

const router = Router();

const validation = [
    body('email').isEmail().withMessage('Email must be provided'),
    body('password').trim().isLength({ min: 4, max: 20 }).withMessage('Password must be between 4 and 20 characters')
];

router.post('/sign-up', validation, (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array());
    }
    const { email, password } = req.body;

    throw new DatabaseConnectionError();

    res.status(200).json({ email, password });
});

export { router as SignUpRouter };