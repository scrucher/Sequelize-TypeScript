'use strict';
import "reflect-metadata";
import express, {Request,Response,Application, request, response} from 'express';
import bodyParser from "body-parser";
import Routes from "./routes/index.route";
import { createConnection } from 'typeorm';
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import authMiddleware from "./midlleware/auth.middleware";



        const app:Application = express();
        const PORT = process.env.PORT || 8000;
        app.use('/', Routes);
        app.listen(PORT, ():void => {
            console.log(`Server Running on https://localhost:${PORT}`);
        });

