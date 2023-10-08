import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import HeaderLogoDesktop from '../assets/Logo/LOGO_desktop.png'
import HeaderLogoMobile from '../assets/Logo/LOGO_mobile.png'
import '../style/components/header.scss'
import '/src/style/main.scss'

function Header(){

    return <nav className="header">
        <img src={HeaderLogoDesktop} alt="Logo Kasa" className="header__logo--desktop"/>
        <img src={HeaderLogoMobile} alt="Logo Kasa" className="header__logo--mobile"  />
        <div className="header__links">
            <NavLink to={'/'} id="header__links--accueil" className={({ isActive}) => isActive ? "active" : ""} style={({isActive}) =>{return {textDecoration: isActive ? "underline" : ""}}}>ACCUEIL</NavLink>
            <NavLink to='/About'id="header__links--about" className={({isActive}) => isActive ? "active" : ""} style={({isActive}) =>{return {textDecoration: isActive ? "underline" : ""}}}>A PROPOS</NavLink>
        </div>
       </nav>


}

export default Header