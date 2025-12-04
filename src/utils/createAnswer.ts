import type { AnswerResponse } from "../services/post-results/AnswerResponse";
import type { Answer } from "../types/Answer";


const createAnswer = (answerResponse : AnswerResponse) : Answer => {
    return {
        isCorrect: answerResponse.answer,
        id: answerResponse.questionId
    }

}

export default createAnswer;