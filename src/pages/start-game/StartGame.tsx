import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getLevels from "../../services/get-levels/getLevels";
import type { Level } from "../../types/Level";
import GameLoader from "../../components/game-loader/GameLoader";
import ErrorContainer from "../../components/error-container/ErrorContainer";
import QuestionsContainer from "../../components/questions-container/QuestionsContainer";
import useDataResult from "../../hooks/useDataResult";


const StartGame = () => {
    
    const {isError, setIsError, isLoading, handleResult, handleError} = useDataResult();
    const { difficulty } = useParams();
    const [levels, setLevels] = useState<Level[]>([]);

    useEffect(() => {
        getLevels(difficulty)
            .then(levels => handleResult(() => setLevels(levels)))
            .catch(() => handleError());
    }, [isError]);

    return (
        <>
            {isLoading && <GameLoader />}
            {isError && <ErrorContainer message = "No se pudieron cargar las preguntas" event = {() => setIsError(false)} />}
            {levels.length > 0 && <QuestionsContainer levels = {levels} />}
        </>
    )
}

export default StartGame;