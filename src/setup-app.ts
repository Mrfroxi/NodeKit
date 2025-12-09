import express , {Express,Request,Response} from "express";

export const setupApp:(app:Express) => Express = (app:Express) :Express =>{
    app.use(express.json()); // parsing JSONin the body

    app.get('/',(req:Request , res :Response):void =>{
        res.status(200).send('hello nodeKit');
    })

    return  app;
}