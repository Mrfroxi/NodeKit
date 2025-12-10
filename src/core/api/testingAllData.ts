import {Router,Request,Response} from "express";
import {db} from "../../db/db";


export const testingAllData = Router();


// @ts-ignore
testingAllData.delete("/all-data" ,(req:Request,res:Response) =>{

    db.videos.length = 0;

    res.status(204).end( );

})