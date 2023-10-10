import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line react/prop-types
function Location__Carousel({ pictures }) {
  console.log(pictures)

  return (
    <div
      className="carousel__container"
      style={{ backgroundImage: `url(${pictures})`, backgroundSize :'cover', height:'415px', width:'100%'}}
    >
      <FontAwesomeIcon icon={faChevronLeft} className="carousel_icons" />
      <FontAwesomeIcon icon={faChevronRight} className="carousel_icons" />
    </div>
  )
}

export default Location__Carousel
