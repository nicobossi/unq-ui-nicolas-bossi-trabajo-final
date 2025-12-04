import type { Answer } from "../types/Answer";
import type { Level } from "../types/Level";
import type { Result } from "../types/Result";


const createResult = (answer : Answer, level : Level) : Result => {
    return {
        assert: answer.isCorrect,
        isLastQuestion: answer.id === level.id
    }
}

export default createResult;