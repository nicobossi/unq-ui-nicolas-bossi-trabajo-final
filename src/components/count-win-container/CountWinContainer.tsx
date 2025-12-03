import type { CountContainerProperty } from "../../types/CountContainerProperty"
import './count-win-container.css'

const CountWinContainer = ({currentCount, total} : CountContainerProperty) => {
    return (
        <div className = "count-win-container">
            <p className = "count-win-container_title">Preguntas correctas:</p>
            <p className = "count-win-container_total">{currentCount} / {total}</p>
        </div>
    )
}

export default CountWinContainer;