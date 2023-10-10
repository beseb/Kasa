/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Location__Carousel({ pictures }) {
  const [index, setIndex] = useState(0)
  let totalLength = pictures.length

  const handlePrevious = () => {
    const newIndex = index - 1
    setIndex(newIndex < 0 ? totalLength - 1 : newIndex)
  }
  const handleNext = () => {
    const newIndex = index + 1
    setIndex(newIndex >= totalLength ? totalLength - totalLength : newIndex)
  }

  return (
    <div
      className="carousel__container"
      style={{
        backgroundImage: `url(${pictures[index]})`,
        backgroundSize: 'fill',
        backgroundPosition: 'center',
        height: '415px',
        width: '100%',
      }}
    >
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="carousel__icons left"
        onClick={handlePrevious}
        style={{float: 'left'}}
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        className="carousel__icons" id='right'
        onClick={handleNext}
        style={{float:'right'}}
      />
      <span className="carousel__counter">
        {index + 1} / {pictures.length}
      </span>
    </div>
  )
}

export default Location__Carousel
