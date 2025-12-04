import OptionsList from "../../components/options-list/OptionsList"
import QuestionContainer from "../../components/question-container/QuestionContainer"
import type { QuestionGameProperty } from "../../types/QuestionGameProperty";
import './start-game.css'
import CountQuestionContainer from "../../components/count-question-container/CountQuestionContainer";
import CountWinContainer from "../../components/count-win-container/CountWinContainer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import showError from "../../utils/showError";
import type { Result } from "../../types/Result";
import useCounterResults from "../../hooks/useCounterResults";
import last from "../../utils/lastLevel";
import { END_GAME } from "../../urls";
import postResult from "../../services/post-results/postAnswer";


const StartGame = ({levels} : QuestionGameProperty) => {
    
    const {totalCounter, assertsCounter, handleCounters} = useCounterResults();
    const [result, setResult] = useState<Result | null>(null);
    const navigate = useNavigate();

    const handleAnswer = (option : string) => {
        postResult(option, levels?.[totalCounter], last(levels, levels?.length))
            .then(result => {
                setResult(result);
                handleCounters(
                    result, 
                    (asserts : number, total : number) => navigate(`${END_GAME}/${asserts}/${total}`), 
                    () => setResult(null));
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