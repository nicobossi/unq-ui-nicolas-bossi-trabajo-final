import axios from "axios"
import { POST_ANSWER } from "../urls";
import createAnswer from "../../utils/createAnswer";
import createAnswerRequest from "./createAnswerRequest";
import type { AnswerResponse } from "./AnswerResponse";
import type { Result } from "../../types/Result";
import createResult from "../../utils/createResult";
import type { Level } from "../../types/Level";
import type { Option } from "../../types/Option";


const postResult = async (option: Option, currentLevel: Level, lastLevel : Level) : Promise<Result> => {
    try {
        const response = await axios.post<AnswerResponse>(POST_ANSWER, createAnswerRequest(option.answerNumber, currentLevel.id));
        return createResult(createAnswer(response.data), lastLevel, option);
    }
    catch(error) {
        return Promise.reject(error);
    }
}

export default postResult;