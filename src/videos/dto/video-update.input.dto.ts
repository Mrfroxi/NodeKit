import {AvailableResolutionsDto} from "./video.dto";

export  type VideoUpdateDto = {
    id?:number
    title?:string,
    author?:string,
    canBeDownloaded? : boolean,
    minAgeRestriction? :number | null ,
    createdAt? : string,
    publicationDate? :string,
    availableResolutions? : AvailableResolutionsDto[]
}