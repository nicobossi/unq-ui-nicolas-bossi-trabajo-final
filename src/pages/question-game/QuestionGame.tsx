import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getLevels from "../../services/get-levels/getLevels";
import type { Level } from "../../types/Level";
import QuestionContainer from "../../components/question-container/QuestionContainer";
import OptionsList from "../../components/options-list/OptionsList";
import './question-game.css'
import CountContainer from "../../components/count-container/CountContainer";


const QuestionGame = () => {
    const { difficulty } = useParams();
    const [levels, setLevels] = useState<Array<Level>>([]);
    const [countResponse, setCountResponse] = useState<number>(0);

    useEffect(() => {
        const get = async () => setLevels(await getLevels(difficulty));
        get();
    }, []);

    const handleResponse = (option : string) => {

    }

    if (levels.length === 0) {return <p>aa</p>}

    return (
        <section className = "question-game_container">
            <CountContainer 
            currentCount = {countResponse} 
            total = {levels.length}/>
            <QuestionContainer 
                question = {levels[countResponse].question} />
            <OptionsList 
                options = {levels[countResponse].options} 
                event = {handleResponse} />
        </section>
    )
}

export default QuestionGame;