import './end-game.css'
import ReintentMessage from '../../components/reintent-message/ReintentMessge';
import { useParams } from 'react-router-dom';


const EndGame = () => {

    const { asserts, total } = useParams();

    return (
        <section className = "end-game">
            <div className = "end-game_container">
                <div className = "end-game_container--title">
                    <h2>¡Felicidades, finalizaste la partida!</h2>
                </div>
                <div className = "end-game_container--correct">
                    <p>Respuestas correctas: 
                    <br /> {asserts} / {total}</p>
                </div>
                <div className = "end-game_container--fail">
                    <p>Respuestas incorrectas: 
                    <br /> {Number(total) - Number(asserts)} / {total}</p>
                </div>
                <ReintentMessage />
            </div>
        </section>
    )
}

export default EndGame;