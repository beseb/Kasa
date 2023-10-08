import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Location__Rating({ rating }) {
  const stars = []
  // Boucle pour créer les étoiles
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      // Ajouter une étoile pleine si le rating est supérieur à l'index de la boucle
      stars.push(
        <FontAwesomeIcon icon={faEnvelope} style={{color: "#3a2903",}} />
      )
    } else {
      // Ajouter une étoile vide sinon
      stars.push(
        <img key={i} className="star empty-star" style={{color:"grey"}} src="../../public/star-inactive 2.png"/>
    


        )
    }
  }

  return <div className="location__rating--container">{stars}</div>
}

export default Location__Rating
