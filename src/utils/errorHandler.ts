//src/utils/errorHandler.ts

//Implement a custom error class and functions 
// to handle different types of errors gracefully.


export class CustomError extends Error {

    constructor ( message: string){
        super (message);
        this.name = 'CustomError';
    }
}

export function handleError (err: unknown) {
    if (err instanceof CustomError){
        console.error(`[API Error] ${err.message}`)
    } else if (err instanceof Error) {
        console.error(`[System Error] : ${err.message}`)

    } else {
        console.error("Unknown Error");
    }
}