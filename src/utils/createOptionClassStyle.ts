import type { Option } from "../types/Option";
import type { OptionStyles } from "../types/OptionStyles";
import type { Result } from "../types/Result";


const createOptionClassStyle = (option : Option, result : Result | null) : OptionStyles => {
    return option.answerNumber === result?.option.answerNumber ? 
    {
        buttonClass: result.assert ? "correct-option" : "fail-option"
    } 
        :
    {
        buttonClass: "default-option"
    }
}

export default createOptionClassStyle;