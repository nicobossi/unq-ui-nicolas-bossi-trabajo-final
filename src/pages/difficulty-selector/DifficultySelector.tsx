import { useEffect, useState } from "react";
import getDifficulty from "../../services/get-difficulty/getDifficulty";
import DifficultyButton from "../../components/difficulty-button/DifficultyButton";
import type { Difficulties } from "../../types/Difficulties";
import './difficulty-selector.css';
import { QUESTION_GAME } from "../../routes";
import { useNavigate } from "react-router-dom";
import image from '../../assets/R.png'


const DifficultySelector = () => {

    const [difficulties, setDifficulties] = useState<Difficulties | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const get = async () => setDifficulties(await getDifficulty());
        get();
    }
    , []);

    const handleDifficultySelector = (level: string | undefined) => {
        navigate(`${QUESTION_GAME}/${level}`);
    }

    return (
        <section className = "difficulty-selector">
            <div className = "difficulty-selector_container">
                <div className = "difficulty-selector_logo-container">
                    <figure className = "main-logo_container">
                        <img src = {image} alt="logo principal de preguntados" />
                    </figure>
                </div>
                <div className = "difficulty-selector_options">
                    <DifficultyButton name = {difficulties?.option1} event = {handleDifficultySelector} />
                    <DifficultyButton name = {difficulties?.option2} event = {handleDifficultySelector} />
                    <DifficultyButton name = {difficulties?.option3} event = {handleDifficultySelector} />
                    <DifficultyButton name = {difficulties?.option4} event = {handleDifficultySelector} />
                </div>
            </div>
        </section>
    )
}

export default DifficultySelector;