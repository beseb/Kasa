import { useParams } from 'react-router-dom'
import LocationsItems from '../components/LocationsItem'
function LocationPage() {
  // Récupération de l'id du logement depuis l'url
  const { id } = useParams()

  return (
    <div id="main">
      <LocationsItems id={id} />
    </div>
  )
}

export default LocationPage
