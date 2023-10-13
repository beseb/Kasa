import '/src/style/components/banner.scss'
// On importe le main scss car les marges sont écrites dans le main.scss
import '/src/style/main.scss'
import Banner__text from './Banner__text'
import imgAccueil from '../assets/Banner/Image_source_1_Accueil.png'
import imgAbout from '../assets/Banner/Image_source_2_About.png'

// La propriété 'page' est attendue dans les props
// eslint-disable-next-line react/prop-types
function Banner({ page }) {
  console.log(imgAccueil)
  return (
    <div
      className={`banner`}
      id={page}
      style={{
        backgroundImage:
          page === 'accueil' ? `url(${imgAccueil})` : `url(${imgAbout})`,
      }}
    >
      <Banner__text page={page} />
    </div>
  )
}

export default Banner
