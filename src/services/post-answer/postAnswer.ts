import axios from "axios"
import { POST_ANSWER } from "../urls";
import createAnswer from "../../utils/createAnswer";
import createAnswerRequest from "./createAnswerRequest";
import type { AnswerResponse } from "./AnswerResponse";
import type { Result } from "../../types/Result";
import createResult from "../../utils/createResult";
import type { Level } from "../../types/Level";


const postAnswer = async (option: string, currentLevel: Level, lastLevel : Level) : Promise<Result> => {
    try {
        const response = await axios.post<AnswerResponse>(POST_ANSWER, createAnswerRequest(option, currentLevel.id));
        return createResult(createAnswer(response.data), lastLevel);
    }
    catch(error) {
        return Promise.reject(error);
    }
}

export default postAnswer;