import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Answer } from "../types/Answer";
import postAnswer from "../services/post-answer/postAnswer";
import type { Level } from "../types/Level";
import { LOSE_GAME, WIN_GAME } from "../urls";
import showError from "../utils/showError";


const useAnswers = (levels: Level[]) => {

    const [counter, setCounter] = useState<number>(0);
    const [answer, setAnswer] = useState<string | null>(null);
    const navigate = useNavigate();

    const post = async (option: string) : Promise<Answer | void> => {
        return postAnswer(option, levels[counter].id)
            .then(data => data)
            .catch(error => showError(error));
    } 

    const handleCounter = async (option : string) => {
        
        const answer = await post(option);
        
        if(answer?.isCorrect) {
            setAnswer("Correcto");
            handleAssert();
        }
        else {
            setAnswer("Incorrecto");
            handleFail();
        } 
    }

    const handleAssert = () => {
        if(counter < levels.length - 1) {
            setTimeout(() => {
                setCounter(counter + 1);
                setAnswer(null);
            }, 1500);
        }
        else {
            navigate(WIN_GAME);
        }
    }

    const handleFail = () => {
        setTimeout(() => {
            navigate(LOSE_GAME);
        }, 1500);
    }

    return {counter, answer, handleCounter}
}

export default useAnswers;