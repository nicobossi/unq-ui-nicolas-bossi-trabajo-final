import { Link } from "react-router-dom";
import './reintent-message.css'
import { INDEX } from "../../urls";


const ReintentMessage = () => {
    return (
        <div className = "link-init_container">
            <p>¿Querés intentarlo de nuevo?</p>
            <Link to={INDEX}>Iniciar partida</Link>
        </div>
    )
}

export default ReintentMessage;