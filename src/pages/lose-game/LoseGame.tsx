import './lose-game.css'
import ReintentMessage from '../../components/reintent-message/ReintentMessge';


const LoseGame = () => {
    return (
        <section className = "lose-game">
            <div className = "lose-game_container">
                <div className = "lose-title_container">
                    <h2>¡Perdiste!</h2>
                </div>
                <ReintentMessage />
            </div>
        </section>
    )
}

export default LoseGame;