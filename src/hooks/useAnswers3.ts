import { useState } from "react";
import type { Level } from "../types/Level";
import postAnswer from "../services/post-answer/postAnswer";
import showError from "../utils/showError";
import { useNavigate } from "react-router-dom";
import { WIN_GAME } from "../urls";


const useAnswers3 = (levels : Level[]) => {

    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [winCounter, setWinCounter] = useState<number>(0);
    const [currentAnswer, setCurrentAnswer] = useState<string | null>(null);
    const navegate = useNavigate();

    function handleAssert(isCorrect : boolean) {
        if(isCorrect) {
            setCurrentAnswer("Correcto");
            setWinCounter(winCounter + 1);
        }
        else {
            setCurrentAnswer("Incorrecto");
        }
    }

    function handleAnswer(option : string) {
        postAnswer(option, levels[currentQuestion].id)
            .then(answer => handleAssert(answer.isCorrect))
            .catch(error => showError(error));
    }

    function handleNextQuestion() {
        setTimeout(() => {
            if(currentQuestion < levels.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setCurrentAnswer(null);
            }
            else {
                navegate(WIN_GAME);
            }
        }, 1500);
    }

    return {currentAnswer, winCounter, currentQuestion, handleAnswer, handleNextQuestion}
}

export default useAnswers3;
