import OptionsList from "../options-list/OptionsList"
import type { QuestionGameProperty } from "../../types/QuestionGameProperty";
import './questions-container.css'
import CountQuestionContainer from "../count-question-container/CountQuestionContainer";
import CountWinContainer from "../count-win-container/CountWinContainer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Result } from "../../types/Result";
import useCounterResults from "../../hooks/useCounterResults";
import last from "../../utils/lastLevel";
import { END_GAME } from "../../urls";
import postResult from "../../services/post-results/postAnswer";
import type { Option } from "../../types/Option";
import ResultContainer from "../result-container/ResultContainer";
import ErrorContainer from "../error-container/ErrorContainer";
import useDataResult from "../../hooks/useDataResult";


const QuestionsContainer = ({levels} : QuestionGameProperty) => {
    
    const {isError, setIsError} = useDataResult();
    const {totalCounter, assertsCounter, handleCounters} = useCounterResults();
    const [result, setResult] = useState<Result | null>(null);
    const navigate = useNavigate();

    const handleAnswer = (option : Option) => {
        postResult(option, levels[totalCounter], last(levels, levels.length))
            .then(result => {
                setResult(result);
                handleCounters(
                    result, 
                    (asserts : number) => navigate(`${END_GAME}/${asserts}/${levels.length}`), 
                    () => setResult(null));
            })
            .catch(() => setIsError(true));
    }

    if (isError) return <ErrorContainer message = "Hubo un problema para cargar la respuesta" event ={() => setIsError(false)}/>

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
                    <ResultContainer 
                        question = {levels[totalCounter].question} 
                        result = {result} />
                    <OptionsList 
                        options = {levels[totalCounter].options} 
                        event = {handleAnswer} 
                        result = {result} />
                </div>
            </section>
        </main>
    )
}

export default QuestionsContainer;