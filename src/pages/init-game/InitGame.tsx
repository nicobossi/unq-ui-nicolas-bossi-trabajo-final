import { useEffect, useState } from "react";
import ErrorContainer from "../../components/error-container/ErrorContainer";
import useDataResult from "../../hooks/useDataResult";
import getDifficulty from "../../services/get-difficulty/getDifficulty";
import GameLoader from "../../components/game-loader/GameLoader";
import DifficultySelector from "../../components/difficulty-selector/DifficultySelector";


const InitGame = () => {

    const {isError, setIsError, isLoading, handleResult, handleError} = useDataResult();
    const [difficulties, setDifficulties] = useState<string[] | null>(null);

    useEffect(() => {
        getDifficulty()
            .then(difficultiesData => handleResult(() => setDifficulties(difficultiesData)))
            .catch(() => handleError())
    }, [isError]);
    
    return (
        <>
            {isLoading && <GameLoader />}
            {isError && <ErrorContainer message = "No se pudieron cargar las dificultades" event = {() => setIsError(false)} />}
            {difficulties && <DifficultySelector difficulties = {difficulties} />}
        </>
    )
}

export default InitGame;