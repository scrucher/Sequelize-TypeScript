'use strict';
import "reflect-metadata";
import express, {Application} from 'express';



        const app:Application = express();
        const PORT = process.env.PORT || 8000;
        app.use("/", Ruutes);
        app.listen(PORT, ():void => {
            console.log(`Server Running on https://localhost:${PORT}`);
        });
    
