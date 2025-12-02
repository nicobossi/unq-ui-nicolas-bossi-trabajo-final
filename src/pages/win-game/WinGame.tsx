import { Link } from 'react-router-dom';
import { INDEX } from '../../routes';
import './win-game.css'


const WinGame = () => {
    return (
        <section className = "win-game">
            <div className = "win-game_container">
                <h2>!Felicidades¡</h2>
                <p>¿Quieres intentarlo de nuevo?</p>
                <Link to={INDEX}>Iniciar partida</Link>
            </div>
        </section>
    )
}

export default WinGame;