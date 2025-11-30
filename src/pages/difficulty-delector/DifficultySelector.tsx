import { useEffect, useState } from "react";
import getDifficulty from "../../services/get-difficulty/getDifficulty";
import DifficultyButton from "../../components/difficulty-button/DifficultyButton";
import type { Difficulties } from "../../types/Difficulties";
import './difficulty-selector.css';


const DifficultySelector = () => {

    const [difficulties, setDifficulties] = useState<Difficulties | null>(null);

    useEffect(() => {
        const get = async () => {
            const data = await getDifficulty();
            setDifficulties(data);
        } 
        get();
    }
    , []);

    return (
        <section className = "difficulty-selector">
            <div className = "difficulty-selector_container">
                <DifficultyButton name = {difficulties?.option1} color = "#FFD700" />
                <DifficultyButton name = {difficulties?.option2} color = "#1E90FF" />
                <DifficultyButton name = {difficulties?.option3} color = "#00A86B" />
                <DifficultyButton name = {difficulties?.option4} color = "#FF4500" />
            </div>
        </section>
    )
}

export default DifficultySelector;