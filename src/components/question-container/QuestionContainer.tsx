import type { QuestionContainerProperty } from "../../types/QuestionContainerProperty";
import './question-container.css'

const QuestionContainer = ({question, answer} : QuestionContainerProperty) => {

    return (
        <div className = "question-container">
            <p className = {answer ? "invisible" : "question_content"}>{question}</p>
            <p className = {answer ? "answer_content" : "invisible"}>{answer}</p>
        </div>
    );
}

export default QuestionContainer;