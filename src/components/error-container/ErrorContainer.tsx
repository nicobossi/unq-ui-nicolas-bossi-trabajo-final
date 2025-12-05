import LogoContainer from "../logo-container/LogoContainer";
import type { ErrorContainerProperty } from "../../types/ErrorContainerProperty";
import "./error-container.css"

const ErrorContainer = ({message, event} : ErrorContainerProperty) => {
    return (
        <section className = "error">
            <div className = "error_container"> 
                <LogoContainer />
                <section className = "error_container_messages">
                    <h2 className = "error-container_warning">Ups… algo salió mal.</h2>
                    <p className = "error-container_message">{message}</p>
                </section>
                <section className = "error_container_button-conteiner">
                    <button onClick = {event}>Reintentar</button>
                </section>
            </div>
        </section>
    )
}

export default ErrorContainer;