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
        {/* Attention !! Changer le props de Location__Gallery pour qu'il affiche la gallerie d'images !!! */}
        <Location__Gallery cover={logement.cover} />
        {/* Attention !! Changer le props de Location__Gallery pour qu'il affiche la gallerie d'images !!! */}

        <h1 className="location__description--title">{logement.title}</h1>
        <p className="location__description--city">{logement.location}</p>

        <Location__Tags tags={logement.tags} />
        <Location__Host
          name={logement.host.name}
          picture={logement.host.picture}
        />
        <Location__Rating rating={logement.rating} />
        <Location__Description description={logement.description} />
        <Location__Equipments equipments={logement.equipments} />
      </div>
    )
  }
}

export default Locations
