import OptionsList from "../../components/options-list/OptionsList"
import QuestionContainer from "../../components/question-container/QuestionContainer"
import type { QuestionGameProperty } from "../../types/QuestionGameProperty";
import './start-game.css'
import useAnswers3 from "../../hooks/useAnswers3";
import CountQuestionContainer from "../../components/count-question-container/CountQuestionContainer";
import CountWinContainer from "../../components/count-win-container/CountWinContainer";


const StartGame = ({levels} : QuestionGameProperty) => {
    
   const {currentAnswer, winCounter, currentQuestion, handleAnswer, handleNextQuestion} = useAnswers3(levels);

    const handleSubmit = (option : string) => {
        handleAnswer(option);
        handleNextQuestion();
    }

    return (
        <main className = "question-game">
            <section className = "question-game_container">
                <div className = "counter-question_container">
                    <CountQuestionContainer 
                        currentCount = {currentQuestion} 
                        total = {levels.length} />
                </div>
                <div className = "counter-win_container">
                    <CountWinContainer 
                        currentCount = {winCounter} 
                        total = {levels.length} />
                </div>
                <div className = "game-form_container">
                    <QuestionContainer 
                        question = {levels[currentQuestion].question} 
                        answer = {currentAnswer} />
                    <OptionsList 
                        options = {levels[currentQuestion].options} 
                        event = {handleSubmit} />
                </div>
            </section>
        </main>
    )
}

export default StartGame;