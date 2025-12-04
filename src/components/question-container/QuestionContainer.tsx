import type { QuestionContainerProperty } from "../../types/QuestionContainerProperty";
import type { Result } from "../../types/Result";
import './question-container.css'


const QuestionContainer = ({question, result} : QuestionContainerProperty) => {

    return (
        <section className = {result ? answer(result).containerClass : "question-container"}>
            <p className = {result ? answer(result).contentClass : "none_answer"}>{answer(result).text}</p>
            <p className = {result ? "none_question" : "question_content"}>{question}</p>
        </section>
    );
}

const answer = (result : Result | null) => {
    return result?.assert 
    ? 
    {
        containerClass: "assert-container",
        contentClass: "assert",
        text: "Correcto"
    } : 
    {
        containerClass: "fail-container",
        contentClass: "fail",
        text: "Incorrecto"
    }
}

export default QuestionContainer;