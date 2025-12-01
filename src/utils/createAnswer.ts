import type { Answer } from "../types/Answer";
import type { AnswerAPI } from "../types/AnswerAPI";


const createAnswer = (answerAPI: AnswerAPI) : Answer => {
    return {
        isCorrect: answerAPI.answer,
        id: answerAPI.questionId
    }

}

export default createAnswer;