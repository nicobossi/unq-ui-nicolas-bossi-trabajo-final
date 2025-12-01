import type { OptionsListProperty } from "../../types/OptionsListProperty";
import './option-list.css'


const OptionsList = ({options, event} : OptionsListProperty) => {
    return (
        <div className = "option-list_container">
            {options.map(option => 
            <button 
            key = {option}
            onClick = {() => event(option)}>
                {option}
            </button>)}
        </div>
    );
}

export default OptionsList;