export type ErrorMessage = {
    field : string,
    message:string
}

export function createErrorMessage(field:string,message:string):ErrorMessage{
    return { field, message };
}