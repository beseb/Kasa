/* eslint-disable react/prop-types */
// On importe le main scss car les marges sont écrites dans le main.scss
import '/src/style/main.scss'
import '../style/pages/locations.scss'
import Location__Description from '../components/Location__Description'
import Location__Tags from '../components/Location__Tags'
import Location__Host from '../components/Location__Host'
import Location__Gallery from '../components/Location__Gallery'
import Location__Equipment from '../components/Location_Equipment'

function Locations(props){
    return <div id='main'><h1>{props.title}</h1>
    <Location__Gallery props={props}/>
    <h1 className="location__description--title">{props.title}</h1>
    <p className="location__description--city">{props.location}</p>

    <Location__Tags props={props}/>
    <Location__Tags props={props}/>
    <Location__Host props={props}/>
    <Location__Description props={props}/>
    <Location__Equipment props={props}/>
    </div>
}

export default Locations