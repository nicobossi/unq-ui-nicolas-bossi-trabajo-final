import { useEffect, useState } from "react";
import getDifficulty from "../../services/get-difficulty/getDifficulty";
import DifficultyButton from "../../components/difficulty-button/DifficultyButton";
import type { Difficulties } from "../../types/Difficulties";
import './difficulty-selector.css';
import { QUESTION_GAME } from "../../routes";
import { useNavigate } from "react-router-dom";


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
                <DifficultyButton name = {difficulties?.option1} color = "#FFD700" event = {handleDifficultySelector} />
                <DifficultyButton name = {difficulties?.option2} color = "#1E90FF" event = {handleDifficultySelector} />
                <DifficultyButton name = {difficulties?.option3} color = "#00A86B" event = {handleDifficultySelector} />
                <DifficultyButton name = {difficulties?.option4} color = "#FF4500" event = {handleDifficultySelector} />
            </div>
        </section>
    )
}

export default DifficultySelector;