import type { QuestionContainerProperty } from "../../types/QuestionContainerProperty";
import './question-container.css'

const QuestionContainer = ({question, answer} : QuestionContainerProperty) => {

    return (
        <div className = "question-container">
            {answer ? 
                <p className = "answer_content active">{answer}</p> :
                <p className = "question_content active">{question}</p>}
        </div>
    );
}

export default QuestionContainer;