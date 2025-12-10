import {VideoInputDto} from "../dto/video-create.input";
import {createErrorMessage, ErrorMessage} from "../type/videoValidateErrorType";
import {AvailableResolutionsDto} from "../dto/video.dto";



export function videoValidateCreate(reqBody:VideoInputDto){

    const errorsMessages: Array<ErrorMessage> = [];

    let  {title,author,availableResolutions}:VideoInputDto = reqBody;

    if( typeof(title) !== 'string' || !title.trim().length || title.trim().length > 40 ){

        errorsMessages.push( createErrorMessage("title","title validation Error"));
    }

    if( typeof(author) !== 'string' ){
        errorsMessages.push( createErrorMessage("author","author validation Error"));
    }

    if(!Array.isArray(availableResolutions)){
        errorsMessages.push( createErrorMessage("availableResolutions","availableResolutions validation Error"));
    }else if(availableResolutions.length){
        const existingResolutions:AvailableResolutionsDto[] = Object.values(AvailableResolutionsDto);

        if(availableResolutions.length > existingResolutions.length){
            errorsMessages.push( createErrorMessage("availableResolutions2","availableResolutions validation Error"));
        }

        for(let elem of availableResolutions){
            if(!existingResolutions.includes(elem)){
                errorsMessages.push( createErrorMessage("availableResolutions3","availableResolutions validation Error"));
                break;
            }
        }
    }



    return errorsMessages;
}

