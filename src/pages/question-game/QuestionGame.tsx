import CountContainer from "../../components/count-container/CountContainer"
import OptionsList from "../../components/options-list/OptionsList"
import QuestionContainer from "../../components/question-container/QuestionContainer"
import type { QuestionGameProperty } from "../../types/QuestionGameProperty";
import useAnswers from "../../hooks/useAnswers";


const QuestionGame = ({levels} : QuestionGameProperty) => {
    
    const { counter, answerIntent, handleCounter } = useAnswers(levels);

    return (
        <section className = "question-game_container">
            <CountContainer 
                currentCount = {counter} 
                total = {levels.length} />
            <QuestionContainer 
                question = {levels[counter].question} 
                answer = {answerIntent} />
            <OptionsList 
                options = {levels[counter].options} 
                event = {handleCounter} />
        </section>
    )
}

export default QuestionGame;