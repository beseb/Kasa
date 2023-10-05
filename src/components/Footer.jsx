import FooterLogoDesktop from '../assets/Logo/Footer_LOGO_desktop.png'
import FooterLogoMobile from '../assets/Logo/Footer_LOGO_mobile.png'
import '../style/components/footer.scss'
// On importe le main scss car les marges sont écrites dans le main.scss
import '/src/style/main.scss'


function Footer() {
  return (
    <footer>
      <div>
        <img src={FooterLogoDesktop} alt="Logo Kasa B&W" className='footer__logo--desktop' />
        <img src={FooterLogoMobile} alt="Logo Kasa B&W" className='footer__logo--mobile'/>
        <p> &copy; 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
