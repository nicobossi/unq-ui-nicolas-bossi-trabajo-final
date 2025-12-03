import type { AnswerResponse } from "../services/post-answer/AnswerResponse";
import type { Answer } from "../types/Answer";


const createAnswer = (answerAPI: AnswerResponse) : Answer => {
    return {
        isCorrect: answerAPI.answer,
        id: answerAPI.id
    }

}

export default createAnswer;