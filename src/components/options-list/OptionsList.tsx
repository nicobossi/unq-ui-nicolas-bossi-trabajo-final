import type { OptionsListProperty } from "../../types/OptionsListProperty";
import createOptionClassStyle from "../../utils/createOptionClassStyle";
import './option-list.css'


const OptionsList = ({options, event, result} : OptionsListProperty) => {
    
    return (
        <section className = "option-list_container">
            {options.map(option => 
            <button 
                className = {createOptionClassStyle(option, result).buttonClass}
                key = {option.answerNumber}
                disabled = {result !== null}
                onClick = {() => event(option)}>
                    {option.answer}
            </button>)}
        </section>
    );
}

export default OptionsList;