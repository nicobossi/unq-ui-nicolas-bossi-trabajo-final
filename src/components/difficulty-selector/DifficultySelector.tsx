import DifficultyButton from "../difficulty-button/DifficultyButton";
import './difficulty-selector.css';
import { QUESTION_GAME } from "../../urls";
import { useNavigate } from "react-router-dom";
import LogoContainer from "../logo-container/LogoContainer";
import type { DifficultySelectorProperty } from "../../types/DifficultySelectorProperty";

const DifficultySelector = ({difficulties} : DifficultySelectorProperty) => {

    const navigate = useNavigate();

    const handleButton = (level: string | undefined) => navigate(`${QUESTION_GAME}/${level}`);

    return (
        <section className = "difficulty-selector">
            <div className = "difficulty-selector_container">
                <LogoContainer />
                <div className = "difficulty-selector_options">
                    {difficulties?.map(difficulty => 
                    <DifficultyButton 
                        key   = {difficulty}
                        name  = {difficulty} 
                        event = {handleButton} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default DifficultySelector;