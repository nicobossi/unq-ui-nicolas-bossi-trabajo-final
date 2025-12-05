import { useEffect, useState } from "react";
import getDifficulty from "../../services/get-difficulty/getDifficulty";
import DifficultyButton from "../../components/difficulty-button/DifficultyButton";
import './difficulty-selector.css';
import { QUESTION_GAME } from "../../urls";
import { useNavigate } from "react-router-dom";
import LogoContainer from "../../components/logo-container/LogoContainer";
import ErrorContainer from "../../components/error-container/ErrorContainer";


const DifficultySelector = () => {

    const [error, setError] = useState<boolean>(false);
    const [difficulties, setDifficulties] = useState<string[] | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        getDifficulty()
            .then(difficultiesData => setDifficulties(difficultiesData))
            .catch(() => setError(true))
    }, [error]);

    const handleButton = (level: string | undefined) => navigate(`${QUESTION_GAME}/${level}`);

    if (error) return <ErrorContainer message = "No se pudieron cargar las dificultades" event = {() => setError(false)} />

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