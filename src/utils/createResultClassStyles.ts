import type { Result } from "../types/Result";
import type { ResultStyles } from "../types/ResultStyles";



const createResultClassStyles = (result : Result | null) : ResultStyles => {
    return result ? 
    {
        containerClass: result.assert ? "assert-container" : "fail-container",
        answerClass: result.assert ? "assert" : "fail",
        questionClass: "none_question"
    }
    : {
        containerClass: "question-container",
        answerClass: "none_answer",
        questionClass: "question_content"
    } 
}

export default createResultClassStyles;