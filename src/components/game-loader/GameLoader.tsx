import './game-loader.css'


const GameLoader = () => {
    return (
        <section className = "loader">
            <div className = "loader-container">
                <div className = "loader-container_content"></div>
                <p>Cargando...</p>
            </div>
        </section>
    )
}

export default GameLoader;