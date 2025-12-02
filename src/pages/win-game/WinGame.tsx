import './win-game.css'
import ReintentMessage from '../../components/reintent-message/ReintentMessge';


const WinGame = () => {
    return (
        <section className = "win-game">
            <div className = "win-game_container">
                <div className = "win-title_container">
                    <h2>¡Felicidades, ganaste!</h2>
                </div>
                <ReintentMessage />
            </div>
        </section>
    )
}

export default WinGame;