import './end-game.css'
import ReintentMessage from '../../components/reintent-message/ReintentMessge';
import { useParams } from 'react-router-dom';


const EndGame = () => {

    const { asserts } = useParams();

    return (
        <section className = "end-game">
            <div className = "end-game_container">
                <div className = "end-text_container">
                    <h2>¡Felicidades, finalizaste la partida!</h2>
                </div>
                <div className = "end-text_container">
                    <p>cantidad de aciertos: {asserts}</p>
                </div>
                <ReintentMessage />
            </div>
        </section>
    )
}

export default EndGame;