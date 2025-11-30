import type { DifficultyButtonProperty } from "../../types/DifficultyButtonProperty";
import './difficulty-button.css';


const DifficultyButton = ({name, color} : DifficultyButtonProperty) => {
    return (
        <div 
        className = "difficulty-button_container"
        style={{backgroundColor: color}}>
            <button>{name}</button>
        </div>
    )
}


export default DifficultyButton;