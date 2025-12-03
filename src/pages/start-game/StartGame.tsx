import CountContainer from "../../components/count-container/CountContainer"
import OptionsList from "../../components/options-list/OptionsList"
import QuestionContainer from "../../components/question-container/QuestionContainer"
import type { QuestionGameProperty } from "../../types/QuestionGameProperty";
import useAnswers from "../../hooks/useAnswers";
import './start-game.css'


const StartGame = ({levels} : QuestionGameProperty) => {
    
    const { counter, answer, handleCounter } = useAnswers(levels);

    return (
        <main className = "question-game">
            <section className = "question-game_container">
                <div className = "counter_container">
                    <CountContainer 
                        currentCount = {counter} 
                        total = {levels.length} />
                </div>
                <div className = "game-form_container">
                    <QuestionContainer 
                        question = {levels[counter].question} 
                        answer = {answer} />
                    <OptionsList 
                        options = {levels[counter].options} 
                        event = {handleCounter} />
                </div>
            </section>
        </main>
    )
}

export default StartGame;