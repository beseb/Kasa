/* eslint-disable react/prop-types */
// On importe le main scss car les marges sont écrites dans le main.scss
import '/src/style/main.scss'
import '../style/pages/locations.scss'
import Location__Description from '../components/Location__Description'
import Location__Tags from '../components/Location__Tags'
import Location__Host from '../components/Location__Host'
import Location__Rating from '../components/Location__Rating'
import Location__Gallery from '../components/Location__Gallery'
import Location__Equipments from '../components/Location__Equipments'
import Accordion from '../components/Accordion'
import { useParams } from 'react-router-dom'
import '../../public/data/logements.json'
import { useEffect, useState } from 'react'

function Locations() {
  // On récupère l'id via l'URL du logement recherche
  const { id } = useParams()
  console.log({ id })
  // On fetch toutes les infos depuis le json

  const [logements, setLogements] = useState([])
  useEffect(() => {
    fetch('/data/logements.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setLogements(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  let logement = logements.find((element) => element.id == id)

  if (logement) {
    return (
      <div id="main">
        <div className="location__main--wrapper">
          {/* Attention !! Changer le props de Location__Gallery pour qu'il affiche la galerie d'images !!! */}
          <Location__Gallery cover={logement.cover} />
          {/* Attention !! Changer le props de Location__Gallery pour qu'il affiche la galerie d'images !!! */}
          <div className="location__TitleCity--container">
            <h1 className="location--title">{logement.title}</h1>
            <p className="location--city">{logement.location}</p>
          </div>
          <Location__Tags tags={logement.tags} />
          <Location__Host
            name={logement.host.name}
            picture={logement.host.picture}
          />
          <Location__Rating rating={logement.rating} />
        <Accordion title='Description' content={logement.description}/>
        <Accordion title='Equipement' content={logement.equipments}/>
        </div>{' '}
      </div>
    )
  }
}

export default Locations
