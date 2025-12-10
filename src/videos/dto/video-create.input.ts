import {AvailableResolutionsDto} from "./video.dto";


export  type VideoInputDto = {
    title:string,
    author:string,
    availableResolutions : AvailableResolutionsDto[]
}