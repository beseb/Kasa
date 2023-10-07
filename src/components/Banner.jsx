import '/src/style/components/banner.scss'
// On importe le main scss car les marges sont écrites dans le main.scss
import '/src/style/main.scss'
import Banner__text from './Banner__text'

// La propriété 'page' est attendue dans les props
// eslint-disable-next-line react/prop-types
function Banner({ page }) {
  return (
    <div className={`banner`} id={page}>
      <Banner__text page = {page}/>
    </div>
  )
}

export default Banner
