import type { ResultContainerProperty } from "../../types/ResultContainerProperty";
import './result-container.css'
import createResultClassStyles from "../../utils/createResultClassStyles";


const ResultContainer = ({question, result} : ResultContainerProperty) => {

    const { containerClass, answerClass, questionClass } = createResultClassStyles(result);

    return (
        <section className = {containerClass}>
            <p className = {answerClass}>{result?.assert ? "Correcto" : "Incorrecto"}</p>
            <p className = {questionClass}>{question}</p>
        </section>
    );
}

export default ResultContainer;