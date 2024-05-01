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
import { useEffect, useState } from 'react'

function LocationsItem({ id }) {
  const [logement, setLogement] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  // Récupération de l'id du logement depuis l'url, passé en props
  // Fetch des données du logement
  useEffect(() => {
    fetch('/data/logements.json?url')
      .then((response) => response.json())
      .then((data) => {
        const foundLogement = data.find((element) => element.id === id)
        if (!foundLogement) {
          navigate('/Erreur', {
            state: { message: 'Failed to find hosting id' },
          })
        } else {
          setLogement(foundLogement)
          setIsLoading(false)
        }
      })
      .catch((error) => {
        console.error(error)
        navigate('/Erreur', { state: { message: 'Failed to load data' } })
      })
  }, [id, navigate])
  // isLoading empeche d'afficher des erreurs dans la console en attendant la fin du fetch
  if (isLoading) {
    return <div>Loading ....</div>
  }
  return (
    <div id="main">
      <div className="location__main--wrapper">
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
        <div className="collapses__section" id="collapses_host_page">
          <Collapse
            title="Description"
            content={logement.description}
            id="location__description"
          />
          <Collapse
            title="Equipement"
            content={logement.equipments}
            id="location__equipment"
          />
        </div>
      </div>
    </div>
  )
}

export default LocationsItem
