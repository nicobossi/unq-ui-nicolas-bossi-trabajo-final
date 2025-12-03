import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getLevels from "../../services/get-levels/getLevels";
import type { Level } from "../../types/Level";
import GameLoader from "../../components/game-loader/GameLoader";
import StartGame from "../start-game/StartGame";
import showError from "../../utils/showError";

const InitGame = () => {
    
    const { difficulty } = useParams();
    const [levels, setLevels] = useState<Level[]>([]);

    useEffect(() => {
        const get = async () => setLevels(await getLevels(difficulty));
        try {
            get();
        }
        catch(error) {
            showError(error);
        }
    }, []);

    return (
        levels.length === 0 ? <GameLoader /> : <StartGame levels = {levels} /> 
    )
}

export default InitGame;