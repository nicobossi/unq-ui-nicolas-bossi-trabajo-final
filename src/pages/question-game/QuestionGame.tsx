import CountContainer from "../../components/count-container/CountContainer"
import OptionsList from "../../components/options-list/OptionsList"
import QuestionContainer from "../../components/question-container/QuestionContainer"
import type { QuestionGameProperty } from "../../types/QuestionGameProperty";
import useAnswers from "../../hooks/useAnswers";
import './question-game.css'


const QuestionGame = ({levels} : QuestionGameProperty) => {
    
    const { counter, answer, handleCounter } = useAnswers(levels);

    return (
        <section className = "question-game_container">
            <CountContainer 
                currentCount = {counter} 
                total = {levels.length} />
            <QuestionContainer 
                question = {levels[counter].question} 
                answer = {answer} />
            <OptionsList 
                options = {levels[counter].options} 
                event = {handleCounter} />
        </section>
    )
}

export default QuestionGame;