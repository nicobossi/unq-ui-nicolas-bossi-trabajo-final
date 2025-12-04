import OptionsList from "../../components/options-list/OptionsList"
import QuestionContainer from "../../components/question-container/QuestionContainer"
import type { QuestionGameProperty } from "../../types/QuestionGameProperty";
import './start-game.css'
import CountQuestionContainer from "../../components/count-question-container/CountQuestionContainer";
import CountWinContainer from "../../components/count-win-container/CountWinContainer";
import { useState } from "react";
import postAnswer from "../../services/post-answer/postAnswer";
import { WIN_GAME } from "../../urls";
import { useNavigate } from "react-router-dom";
import showError from "../../utils/showError";
import type { Result } from "../../types/Result";
import useCounterResults from "../../hooks/useCounterResults";
import last from "../../utils/lastLevel";


const StartGame = ({levels} : QuestionGameProperty) => {
    
    const {totalCounter, assertsCounter, handleResults} = useCounterResults();
    const [result, setResult] = useState<Result | null>(null);
    const navigate = useNavigate();

    const handleAnswer = (option : string) => {
        postAnswer(option, levels[totalCounter], last(levels, levels.length))
            .then(result => {
                setResult(result);
                handleResults(result, () => navigate(WIN_GAME), () => setResult(null));
            })
            .catch(error => showError(error));
    }

    return (
        <main className = "question-game">
            <section className = "question-game_container">
                <div className = "counter-question_container">
                    <CountQuestionContainer 
                        currentCount = {totalCounter} 
                        total = {levels.length} />
                </div>
                <div className = "counter-win_container">
                    <CountWinContainer 
                        currentCount = {assertsCounter} 
                        total = {levels.length} />
                </div>
                <div className = "game-form_container">
                    <QuestionContainer 
                        question = {levels[totalCounter].question} 
                        result = {result} />
                    <OptionsList 
                        options = {levels[totalCounter].options} 
                        event = {handleAnswer} />
                </div>
            </section>
        </main>
    )
}

export default StartGame;