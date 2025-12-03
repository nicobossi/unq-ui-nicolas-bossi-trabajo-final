import axios from "axios"
import { POST_ANSWER } from "../urls";
import type { Answer } from "../../types/Answer";
import createAnswer from "../../utils/createAnswer";
import createAnswerRequest from "./createAnswerRequest";
import type { AnswerResponse } from "./AnswerResponse";


const postAnswer = async (option: string, questionId: string) : Promise<Answer> => {
    try {
        const response = await axios.post<AnswerResponse>(POST_ANSWER, createAnswerRequest(option, questionId));
        return createAnswer(response.data);
    }
    catch(error) {
        return Promise.reject(error);
    }
}

export default postAnswer;