import type { AnswerRequest } from "./AnswerRequest";


const createAnswerRequest = (option: string, questionId: string) : AnswerRequest => {
    return {
        questionId,
        option
    }
} 

export default createAnswerRequest;