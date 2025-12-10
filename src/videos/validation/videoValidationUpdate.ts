import {createErrorMessage, ErrorMessage} from "../type/videoValidateErrorType";
import {AvailableResolutionsDto} from "../dto/video.dto";
import {VideoUpdateDto} from "../dto/video-update.input.dto";



export function videoValidateUpdate(reqBody:VideoUpdateDto){

    const errorsMessages: Array<ErrorMessage> = [];

    let  {title,author,availableResolutions,canBeDownloaded,minAgeRestriction,publicationDate}:VideoUpdateDto = reqBody;

    if(typeof(title) !== 'string' || !title.trim().length || title.trim().length > 40 ){
        errorsMessages.push( createErrorMessage("title","title validation Error"));
    }

    if(author && typeof(author) !== 'string' || !author || author.trim().length > 20){
        errorsMessages.push( createErrorMessage("author","author validation Error"));
    }

    if(!Array.isArray(availableResolutions)){
        errorsMessages.push( createErrorMessage("availableResolutions","availableResolutions validation Error"));
    }else if(availableResolutions.length){
        const existingResolutions:AvailableResolutionsDto[] = Object.values(AvailableResolutionsDto);

        if(availableResolutions.length > existingResolutions.length){
            errorsMessages.push( createErrorMessage("availableResolutions","availableResolutions validation Error"));
        }

        for(let elem of availableResolutions){
            if(!existingResolutions.includes(elem)){
                errorsMessages.push( createErrorMessage("availableResolutions","availableResolutions validation Error"));
                break;
            }
        }
    }

    if(canBeDownloaded && typeof(canBeDownloaded) !== 'boolean' ){
        errorsMessages.push( createErrorMessage("canBeDownloaded","canBeDownloaded validation Error"));
    }

    if (typeof minAgeRestriction !== 'number' && minAgeRestriction !== null) {
        errorsMessages.push(createErrorMessage("minAgeRestriction", "minAgeRestriction validation Error"));
    } else if (typeof minAgeRestriction === 'number') {
        if (minAgeRestriction > 18 || minAgeRestriction < 1) {
            errorsMessages.push(createErrorMessage("minAgeRestriction", "minAgeRestriction validation Error"));
        }
    }


    if(publicationDate && typeof(publicationDate) !== 'string' ){
        errorsMessages.push( createErrorMessage("publicationDate","publicationDate validation Error"));
    }


    return errorsMessages;
}
