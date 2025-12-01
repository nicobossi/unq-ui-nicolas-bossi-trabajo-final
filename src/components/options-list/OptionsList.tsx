import type { OptionsListProperty } from "../../types/OptionsListProperty";
import './option-list.css'


const OptionsList = ({options, event} : OptionsListProperty) => {
    return (
        <div className = "option-list_container">
            {options.map(option => 
            <button 
                key = {option.answerNumber}
                onClick = {() => event(option.answerNumber)}>
                {option.answer}
            </button>)}
        </div>
    );
}

export default OptionsList;