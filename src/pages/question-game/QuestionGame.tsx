import { useState } from "react";
import CountContainer from "../../components/count-container/CountContainer"
import OptionsList from "../../components/options-list/OptionsList"
import QuestionContainer from "../../components/question-container/QuestionContainer"
import { useNavigate } from "react-router-dom";
import { INDEX } from "../../routes";
import postAnswer from "../../services/post-answer/postAnswer";
import type { Answer } from "../../types/Answer";
import type { QuestionGameProperty } from "../../types/QuestionGameProperty";



const QuestionGame = ({levels} : QuestionGameProperty) => {
    
    const [countResponse, setCountResponse] = useState<number>(0);
    const navigate = useNavigate();

    const handleAnswer = async (option : string) => {
        const answer : Answer = await postAnswer(option, levels[countResponse].id);
        
        if(answer.isCorrect) {
            setCountResponse(countResponse + 1);
        }
        else {
            navigate(INDEX);
        } 
    }

    return (
        <section className = "question-game_container">
            <CountContainer 
                currentCount = {countResponse} 
                total = {levels.length} />
            <QuestionContainer 
                question = {levels[countResponse].question} />
            <OptionsList 
                options = {levels[countResponse].options} 
                event = {handleAnswer} />
        </section>
    )
}

export default QuestionGame;