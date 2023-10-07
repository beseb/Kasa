// On importe le main scss car les marges sont écrites dans le main.scss
import '/src/style/main.scss'
import Locations__Description from '../components/Locations__Description'
function Locations(props){
    return <div id='main'><h1>Ceci est la page de locations</h1>
    <Locations__Description props={props}/>
    </div>
}

export default Locations