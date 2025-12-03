import { Link } from "react-router-dom";
import { INDEX } from "../../urls";
import './reintent-message.css'


const ReintentMessage = () => {
    return (
        <div className = "link-init_container">
            <p>Querés intentarlo de nuevo?</p>
            <Link to={INDEX}>Iniciar partida</Link>
        </div>
    )
}

export default ReintentMessage;