import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { DatabaseConnectionError, RequestValidationError } from "../../errors";
import { User } from "../../models/user.model";

const router = Router();

const validation = [
  body("email").isEmail().withMessage("Email must be provided"),
  body("password")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Password must be between 4 and 20 characters"),
];

router.post("/sign-up", validation, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.json({ message: 'User already exists', data: existingUser });
  }

  const user = User.build({ email, password });

  await user.save();

  return res.status(201).json({ user });
});

export { router as SignUpRouter };
