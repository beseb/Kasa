/* eslint-disable react/prop-types */
import '/src/style/components/banner.scss'
// On importe le main scss car les marges sont écrites dans le main.scss
import '/src/style/main.scss'
import imgAccueil from '../assets/Banner/Image_source_1_Accueil.png'
import imgAbout from '../assets/Banner/Image_source_2_About.png'

// La propriété 'page' est attendue dans les props pour afficher correctement le texte de la bannière
function Banner({ page }) {
  return (
    <div
      className={`banner`}
      id={page}
      style={{
        backgroundImage:
          page === 'accueil' ? `url(${imgAccueil})` : `url(${imgAbout})`,
      }}
    >
      <h1
        className="banner__text"
        style={{ display: page === 'accueil' ? 'flex' : 'none' }}
      >
        Chez vous,<br className="mobile-break"></br> partout et ailleurs
      </h1>
    </div>
  )
}

export default Banner
