import { useParams } from "react-router-dom";



const QuestionGame = () => {
    const { difficulty } = useParams();

    return (
        <section>
            <p>{difficulty}</p>
        </section>
    )
}

export default QuestionGame;