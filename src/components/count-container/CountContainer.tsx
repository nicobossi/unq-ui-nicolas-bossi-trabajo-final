import type { CountContainerProperty } from "../../types/CountContainerProperty"
import './count-container.css'


const CountContainer = ({currentCount, total} : CountContainerProperty) => {
    return (
        <div className = "count-container">
            <p>Preguntas respondidas:</p>
            <p>{currentCount} / {total}</p>
        </div>
    )
}

export default CountContainer;