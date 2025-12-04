import type { Answer } from "../types/Answer";
import type { Level } from "../types/Level";
import type { Option } from "../types/Option";
import type { Result } from "../types/Result";


const createResult = (answer : Answer, level : Level, option : Option) : Result => {
    return {
        assert: answer.isCorrect,
        isLastQuestion: answer.id === level.id,
        option: option
    }
}

export default createResult;