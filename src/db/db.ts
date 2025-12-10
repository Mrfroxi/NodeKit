import {AvailableResolutionsDto, VideoDto} from "../videos/dto/video.dto";


interface dbDto  {
    videos : VideoDto[],
}

export const db:dbDto = {
    videos :[
        {
            "id": 0,
            "title": "string",
            "author": "string",
            "canBeDownloaded": true,
            "minAgeRestriction": null,
            "createdAt": "2025-12-09T17:11:04.274Z",
            "publicationDate": "2025-12-09T17:11:04.274Z",
            "availableResolutions": [
                AvailableResolutionsDto.P144
            ]
        },
        {
            "id": 1,
            "title": "string",
            "author": "string",
            "canBeDownloaded": true,
            "minAgeRestriction": null,
            "createdAt": "2025-12-09T17:11:04.274Z",
            "publicationDate": "2025-12-09T17:11:04.274Z",
            "availableResolutions": [
                AvailableResolutionsDto.P144
            ]
        }
    ],
}