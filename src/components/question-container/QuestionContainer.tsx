import type { QuestionContainerProperty } from "../../types/QuestionContainerProperty";
import './question-container.css'

const QuestionContainer = ({question, answer} : QuestionContainerProperty) => {

    return (
        <div className = "question-container">
            <p className = {!answer ? "question_content" : "question_content_invisible"}>{question}</p>
            {answer && <p className = {answer ? "answer_content" : "answer_content_invisible"}>{answer}</p>}
        </div>
    );
}

export default QuestionContainer;