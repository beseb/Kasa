import FooterLogoDesktop from '../assets/Logo/Footer_LOGO_desktop.png'
import FooterLogoMobile from '../assets/Logo/Footer_LOGO_mobile.png'

function Footer() {
  return (
    <footer>
      <img src={FooterLogoDesktop} alt="Logo Kasa B&W" />
      <img src={FooterLogoMobile} alt="Logo Kasa B&W" style={{display:'none'}} />
    </footer>
  )
}

export default Footer
