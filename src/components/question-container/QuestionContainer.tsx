import type { QuestionContainerProperty } from "../../types/QuestionContainerProperty";
import './question-container.css'

const QuestionContainer = ({question} : QuestionContainerProperty) => {
    return (
        <div className = "question-container">
            <p>{question}</p>
        </div>
    );
}

export default QuestionContainer;