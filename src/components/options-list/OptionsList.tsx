import type { OptionsListProperty } from "../../types/OptionsListProperty";
import './option-list.css'


const OptionsList = ({options, event, result} : OptionsListProperty) => {
    return (
        <section className = "option-list_container">
            {options.map(option => 
            <button 
                key = {option.answerNumber}
                disabled = {result !== null}
                onClick = {() => event(option.answerNumber)}>
                    {option.answer}
            </button>)}
        </section>
    );
}

export default OptionsList;