import { Link } from "react-router-dom";
import HeaderLogoDesktop from '../assets/Logo/LOGO_desktop.png'
import HeaderLogoMobile from '../assets/Logo/LOGO_mobile.png'


function Header(){

    return <nav>
        <img src={HeaderLogoDesktop} alt="Logo Kasa" />
        <img src={HeaderLogoMobile} alt="Logo Kasa" style={{ display: 'none' }} />
        <Link to={'/'}>Accueil</Link>
        <Link to='/About'>A propos</Link>
        <Link to='/Erreur'>Erreur</Link>
        <Link to='/Locations'>Locations</Link>
    </nav>
}

export default Header