/* eslint-disable react/prop-types */
// On importe le main scss car les marges sont écrites dans le main.scss
import '/src/style/main.scss'
import '../style/pages/locations.scss'
import Location__Tags from './Location__Tags'
import Location__Host from './Location__Host'
import Location__Rating from './Location__Rating'
import Slideshow from './Slideshow'
import Collapse from './Collapse'
import { useNavigate } from 'react-router-dom'
import '../../public/data/logements.json'
import { useEffect, useState } from 'react'

function LocationsItem({ id }) {
  // On récupère l'id via l'URL du logement recherche

  // On fetch toutes les infos depuis le json

  const [logements, setLogements] = useState([])
  useEffect(() => {
    fetch('/data/logements.json')
    .then((response) => response.json())
    .then((data) => {
      setLogements(data)
    })
    .catch((error) => {
      console.error(error)
    })
    
    
  }, [])
  const logement = logements.find((element) => element.id == id)


  const navigate = useNavigate()

  // Si l'id n'est pas trouvé dans le fichier.json
  if (!logement) {
    navigate('/Erreur', { state: { message: 'Failed to find hosting id' } })
    return null
  } else {
    return (
      <div id="main">
        <div className="location__main--wrapper" >
          <Slideshow pictures={logement.pictures} />
          <div className="location__TitleCity--container">
            <h1 className="location--title">{logement.title}</h1>
            <h2 className="location--city">{logement.location}</h2>
          </div>
          <Location__Tags tags={logement.tags} />
          <Location__Host
            name={logement.host.name}
            picture={logement.host.picture}
          />
          <Location__Rating rating={logement.rating} />
          <div className="collapses__section" id='collapses_host_page'>
            <Collapse
              title="Description"
              content={logement.description}
              page="location__description"
            />
            <Collapse
              title="Equipement"
              content={logement.equipments}
              page="location__equipment"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LocationsItem
