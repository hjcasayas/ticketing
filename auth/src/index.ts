import express, { Request, Response } from 'express';
import { AuthRouter } from "./routes/auth";
import { ErrorHandler } from "./middlewares";
import { NotFoundError } from './errors/not-found.error';
import { connect } from 'mongoose';

const app = express();

app.use(express.json());

app.use(AuthRouter);

app.all('*', () => {
    throw new NotFoundError();
})

app.use(ErrorHandler)

const start = () => {
    connect('mongodb://auth-mongo-service:27107/auth', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(
        () => {
            console.log(`Connected to MongoDB`)
        }
    ).catch(error => {
        console.error(error)
    });
    const PORT = 3000;
    app.listen(PORT, () => console.log(`listening on ${PORT}!!!!`));
}

start();