import {Router,Request,Response} from "express";
import {db} from "../../db/db";
import {HttpStatus} from "../../core/httpStatusCode";
import {videoValidateCreate} from "../validation/videoValidationCreate";
import {VideoDto} from "../dto/video.dto";
import {VideoUpdateDto} from "../dto/video-update.input.dto";
import {videoValidateUpdate} from "../validation/videoValidationUpdate";


export const videosRouter = Router();

    videosRouter
    .get("", (req: Request, res: Response) => {
        res.status(200).send(db.videos);
    })

    .post("" ,(req: Request, res: Response) =>{
        const ReqBody = req.body;

        let errors = videoValidateCreate(ReqBody)

        if(errors .length > 0){
            return  res.status(HttpStatus.BadRequest).send(errors);
        }

        const VideoEntity:VideoDto = {
            id: db.videos.length + 1,
            title: ReqBody.title,
            author: ReqBody.author,
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: `${new Date()}`,
            publicationDate: `${new Date(new Date().setDate(new Date().getDate() + 1))}`,
            availableResolutions: ReqBody.availableResolutions,
        }

        db.videos.push(VideoEntity);

        res.status(HttpStatus.Created).send(VideoEntity)
    })

    .get("/:id" ,(req: Request, res: Response)=>{

        const paramId:string = req.params.id;

        const video :VideoDto | undefined = db.videos.find(elem => elem.id === +paramId);

        if(!video){
            return res.status(HttpStatus.NotFound).send("NotFound get Error");
        }

        return res.status(HttpStatus.Ok).send(video);
    })

    .put("/:id", (req: Request, res: Response)=> {
        const paramId:string = req.params.id;
        const reqBody:VideoUpdateDto = req.body;

        const findVideo :VideoDto | undefined = db.videos.find(elem => elem.id === +paramId);

        if(!findVideo){
            return res.status(HttpStatus.NotFound).send("NotFound put Error");
        }

        const errors = videoValidateUpdate(reqBody);

        if(errors .length > 0){
            return  res.status(HttpStatus.BadRequest).send(errors);
        }

        const updatedVideo:VideoUpdateDto ={
            id:findVideo.id,
            ...reqBody
        }

        res.status(HttpStatus.Ok).send(updatedVideo)

    })

    .delete("/:id",(req: Request, res: Response) =>{
        const index = db.videos.findIndex((v) => v.id === +req.params.id);

        if (index === -1) {
            return res.status(HttpStatus.NotFound).send("NotFound get Error");

        }

        db.videos.splice(index, 1);
        res.sendStatus(HttpStatus.NoContent);
    })