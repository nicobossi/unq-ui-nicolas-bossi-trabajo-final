import { useEffect, useState } from "react";
import getDifficulty from "../../services/get-difficulty/getDifficulty";
import DifficultyButton from "../../components/difficulty-button/DifficultyButton";
import './difficulty-selector.css';
import { QUESTION_GAME } from "../../routes";
import { useNavigate } from "react-router-dom";
import LogoContainer from "../../components/logo-container/LogoContainer";
import showError from "../../utils/showError";


const DifficultySelector = () => {

    const [difficulties, setDifficulties] = useState<string[] | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        getDifficulty()
            .then(answer => setDifficulties(answer))
            .catch((error) => showError(error))
    }, []);

    const handleButton = (level: string | undefined) => navigate(`${QUESTION_GAME}/${level}`);

    return (
        <section className = "difficulty-selector">
            <div className = "difficulty-selector_container">
                <LogoContainer />
                <div className = "difficulty-selector_options">
                    {difficulties?.map(difficulty => 
                    <DifficultyButton 
                        name = {difficulty} 
                        event = {handleButton} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default DifficultySelector;