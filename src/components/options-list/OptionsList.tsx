import type { OptionsListProperty } from "../../types/OptionsListProperty";
import type { Result } from "../../types/Result";
import './option-list.css'


const OptionsList = ({options, event, result} : OptionsListProperty) => {
    
    return (
        <section className = "option-list_container">
            {options.map(option => 
            <button 
                className = {option.answerNumber === result?.option.answerNumber ? optionClass(result) : ""}
                key = {option.answerNumber}
                disabled = {result !== null}
                onClick = {() => event(option)}>
                    {option.answer}
            </button>)}
        </section>
    );
}

const optionClass = (result : Result) => result.assert ? "correct-option" : "fail-option"

export default OptionsList;