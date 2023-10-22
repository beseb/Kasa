import '../style/pages/accueil.scss'
// On importe le main scss car les marges sont écrites dans le main.scss
import '/src/style/main.scss'
import Banner from '../components/Banner'
import Locations__List from '../components/Locations__List'

function Accueil() {
  return (
    <div id="main">
      <Banner page="accueil" />
      <Locations__List />
    </div>
  )
}

export default Accueil
