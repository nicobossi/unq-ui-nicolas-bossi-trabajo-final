import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getLevels from "../../services/get-levels/getLevels";
import type { Level } from "../../types/Level";
import GameLoader from "../../components/game-loader/GameLoader";
import StartGame from "../start-game/StartGame";
import ErrorContainer from "../../components/error-container/ErrorContainer";


const InitGame = () => {
    
    const [error, setError] = useState<boolean>(false);
    const { difficulty } = useParams();
    const [levels, setLevels] = useState<Level[]>([]);

    useEffect(() => {
        getLevels(difficulty)
            .then(data => setLevels(data))
            .catch(() => setError(true));
    }, [difficulty, error]);

    if (error) return <ErrorContainer message = "No se pudieron cargar las preguntas" event = {() => setError(false)} />

    return levels.length === 0 ? <GameLoader /> : <StartGame levels = {levels} /> 
}

export default InitGame;