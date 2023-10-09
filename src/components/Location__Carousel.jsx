import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line react/prop-types
function Location__Carousel({ pictures }) {
  console.log(pictures)
    const carousel= () =>{

        
    }

  return (
    <div className="carousel__container">
      <FontAwesomeIcon icon={faChevronLeft} className="carousel_icons" />
      <FontAwesomeIcon icon={faChevronRight} className="carousel_icons" />
      <span>${`{count}'/'(setCount}`}</span>
    </div>
  )
}

export default Location__Carousel
