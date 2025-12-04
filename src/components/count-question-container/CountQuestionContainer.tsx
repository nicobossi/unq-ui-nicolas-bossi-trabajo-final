import type { CountContainerProperty } from "../../types/CountContainerProperty"
import './count-question-container.css'


const CountQuestionContainer = ({currentCount, total} : CountContainerProperty) => {
    return (
        <section className = "count-question-container">
            <p className = "count-question-container_title">Preguntas respondidas:</p>
            <p className = "count-question-container_total">{currentCount} / {total}</p>
        </section>
    )
}

export default CountQuestionContainer;