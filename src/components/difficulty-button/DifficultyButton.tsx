import type { DifficultyButtonProperty } from "../../types/DifficultyButtonProperty";
import './difficulty-button.css';


const DifficultyButton = ({name, event} : DifficultyButtonProperty) => {
    return (
        <div 
        className = "difficulty-button_container">
            <button onClick = {() => event(name)}>{name}</button>
        </div>
    )
}


export default DifficultyButton;