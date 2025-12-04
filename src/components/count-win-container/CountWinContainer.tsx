import type { CountContainerProperty } from "../../types/CountContainerProperty"
import './count-win-container.css'

const CountWinContainer = ({currentCount, total} : CountContainerProperty) => {
    return (
        <section className = "count-win-container">
            <p className = "count-win-container_title">Respuestas correctas:</p>
            <p className = "count-win-container_total">{currentCount} / {total}</p>
        </section>
    )
}

export default CountWinContainer;