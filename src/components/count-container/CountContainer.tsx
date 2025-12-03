import type { CountContainerProperty } from "../../types/CountContainerProperty"
import './count-container.css'


const CountContainer = ({currentCount, total} : CountContainerProperty) => {
    return (
        <div className = "count-container">
            <p className = "count-container_title">Preguntas respondidas:</p>
            <p className = "count-container_total">{currentCount} / {total}</p>
        </div>
    )
}

export default CountContainer;