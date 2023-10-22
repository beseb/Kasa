import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line react/prop-types
function Location__Rating({ rating }) {
  const stars = []
  // Boucle pour créer les étoiles
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      // Ajouter une étoile pleine si le rating est supérieur à l'index de la boucle
      stars.push(
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: '#FA6060' }}
          key={i}
          className="stars"
        />,
      )
    } else {
      // Ajouter une étoile vide sinon
      stars.push(
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: '#E3E3E3' }}
          key={i}
          className="stars"
        />,
      )
    }
  }

  return <div className="location__rating--container">{stars}</div>
}

export default Location__Rating
