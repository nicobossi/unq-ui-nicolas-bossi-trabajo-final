import image from '../../assets/R.png'
import './logo-container.css'

const LogoContainer = () => {
    return (
        <div className = "difficulty-selector_logo-container">
            <figure className = "main-logo_container">
                <img src = {image} alt="logo principal de preguntados" />
            </figure>
        </div>
    )
}

export default LogoContainer;