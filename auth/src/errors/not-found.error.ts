import { CustomError } from "./custom.error";
import { ISerializedError } from "./serialized-error.interface";

export class NotFoundError extends CustomError {
    statusCode = 400;

    constructor() {
        super('Route not found')
    }

    serialize(): ISerializedError[] {
        return [{ message: 'Not Found' }]
    }

}