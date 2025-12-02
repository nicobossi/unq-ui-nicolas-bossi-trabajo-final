import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getLevels from "../../services/get-levels/getLevels";
import type { Level } from "../../types/Level";
import './init-game.css'
import QuestionGame from "../question-game/QuestionGame";
import GameLoader from "../../components/game-loader/GameLoader";

const InitGame = () => {
    
    const { difficulty } = useParams();
    const [levels, setLevels] = useState<Level[]>([]);

    useEffect(() => {
        const get = async () => setLevels(await getLevels(difficulty));
        get();
    }, []);

    return (
        levels.length === 0 ? <GameLoader /> : <QuestionGame levels = {levels} /> 
    )
}

export default InitGame;