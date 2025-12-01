import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getLevels from "../../services/get-levels/getLevels";
import type { Level } from "../../types/Level";
import QuestionContainer from "../../components/question-container/QuestionContainer";
import OptionsList from "../../components/options-list/OptionsList";
import './question-game.css'
import CountContainer from "../../components/count-container/CountContainer";
import { INDEX } from "../../routes";
import { useNavigate } from "react-router-dom";
import type { Answer } from "../../types/Answer";
import postAnswer from "../../services/post-answer/postAnswer";

const QuestionGame = () => {
    const { difficulty } = useParams();
    const [levels, setLevels] = useState<Level[]>([]);
    const [countResponse, setCountResponse] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        const get = async () => setLevels(await getLevels(difficulty));
        get();
    }, []);

    const handleAnswer = async (option : string) => {
        const answer : Answer = await postAnswer(option, levels[countResponse].id);
        console.log(answer);
        
        if(answer.isCorrect) {
            setCountResponse(countResponse + 1);
        }
        else {
            navigate(INDEX);
        } 
    }

    if (levels.length === 0) {return <p>Cargando...</p>}

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