import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Answer } from "../types/Answer";
import postAnswer from "../services/post-answer/postAnswer";
import type { Level } from "../types/Level";
import { INDEX } from "../routes";


const useAnswers = (levels: Level[]) => {

    const [counter, setCounter] = useState<number>(0);
    const [answerIntent, setAnswerIntent] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleCounter = async (option : string) => {
        const answer : Answer = await postAnswer(option, levels[counter].id);
        
        if(answer.isCorrect) {
            setAnswerIntent("Correcto");
            setTimeout(() => {
                setCounter(counter + 1);
                setAnswerIntent(null);
            }, 1500);
        }
        else {
            setAnswerIntent("Incorrecto");
            setTimeout(() => {
                navigate(INDEX);
            }, 1500);
        } 
    }

    return {counter, answerIntent, handleCounter}
}

export default useAnswers;