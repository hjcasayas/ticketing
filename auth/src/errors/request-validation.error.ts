import { ValidationError } from "express-validator";
import { CustomError } from "./custom.error";
import { ISerializedError } from "./serialized-error.interface";

export class RequestValidationError extends CustomError {
    statusCode = 400;

    constructor(private errors: ValidationError[]) {
        super();

        this.name = 'RequestValidationError';
    }

    serialize(): ISerializedError[] {
        return this.errors.map(error => ({ message: error.msg, field: error.param }));
    }
}