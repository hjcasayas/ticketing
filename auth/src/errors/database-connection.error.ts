import { ValidationError } from "express-validator";
import { CustomError } from "./custom.error";
import { ISerializedError } from "./serialized-error.interface";

export class DatabaseConnectionError extends CustomError {
    statusCode = 500;

    constructor() {
        super();

        this.name = 'DatabaseConnectionError'
    }

    serialize(): ISerializedError[] {
        return [{ message: 'Error connecting to database' }];
    }
}