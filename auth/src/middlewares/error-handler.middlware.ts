import { Request, Response, NextFunction } from "express";
import { DatabaseConnectionError, RequestValidationError, ErrorsTypeEnum } from "../errors";
import { CustomError } from "../errors/custom.error";

export const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
        res.status(err.statusCode).json({ errors: err.serialize() });
    } else {
        res.status(500).json({ message: 'Oh no! Something went wrong!' })
    }
};