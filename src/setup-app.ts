import express , {Express,Request,Response} from "express";

import {testingAllData} from "./core/api/testingAllData";
import {videosRouter} from "./videos/routers/videos.router.ts‎";

export const setupApp:(app:Express) => Express = (app:Express) :Express =>{
    app.use(express.json()); // parsing JSONin the body

    app.get('/',(req:Request , res :Response):void =>{
        res.status(200).send('hello nodeKit');
    })

    app.use("/videos", videosRouter);
    app.use("/testing",testingAllData);

    return  app;
}