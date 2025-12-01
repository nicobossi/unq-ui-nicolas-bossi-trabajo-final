import type { DifficultyButtonProperty } from "../../types/DifficultyButtonProperty";
import './difficulty-button.css';


const DifficultyButton = ({name, color, event} : DifficultyButtonProperty) => {
    return (
        <div 
        className = "difficulty-button_container"
        style={{backgroundColor: color}}>
            <button onClick = {() => event(name)}>{name}</button>
        </div>
    )
}


export default DifficultyButton;