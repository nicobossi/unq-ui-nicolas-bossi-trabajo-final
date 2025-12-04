import type { QuestionContainerProperty } from "../../types/QuestionContainerProperty";
import './question-container.css'


const QuestionContainer = ({question, result} : QuestionContainerProperty) => {

    return (
        <div className = "question-container">
            {result ? 
                <p className = "answer_content active">{result.assert ? "Correcto" : "Incorrecto"}</p> :
                <p className = "question_content active">{question}</p>}
        </div>
    );
}

export default QuestionContainer;