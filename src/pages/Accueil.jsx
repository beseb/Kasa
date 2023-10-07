import '../style/pages/accueil.scss'
// On importe le main scss car les marges sont écrites dans le main.scss
import '/src/style/main.scss'
import Banner from '../components/Banner';
import Locations from '../components/Locations';

function Accueil(){
    return <div id='main'> 
        <Banner page="accueil"></Banner>
        <h1>
        Ceci est la page d'accueil qsdfqsdf</h1>
        <Locations/>
        </div>
}

export default Accueil