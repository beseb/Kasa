/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../style/components/accordion.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Accordion({ title, content, page }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  if (Array.isArray(content)) {
    return (
      <div className={`accordion__container ${page}`}>
        <div className="accordion__header" onClick={toggleAccordion}>
          <h3>{title}</h3>
          <FontAwesomeIcon
            icon={faChevronUp}
            className="icons"
            style={{
              transform: `rotate(${isOpen ? -180 : 0}deg)`,
              transition: 'transform 0.5s ease',
            }}
          />
        </div>
        <div className={`accordion__content ${page} ${isOpen ? 'open' : ''}` }>
          <ul>
            {content.map((element, index) => {
              return <li key={index}>{element}</li>
            })}
          </ul>
        </div>
      </div>
    )
  } else {
    return (
      <div className={`accordion__container ${page}`}>
        <div className="accordion__header" onClick={toggleAccordion}>
          <h3>{title}</h3>
          <FontAwesomeIcon
            icon={faChevronUp}
            className="icons"
            style={{
              transform: `rotate(${isOpen ? -180 : 0}deg)`,
              transition: 'transform 0.5s ease',
            }}
          />
        </div>
        <div className={`accordion__content ${page} ${isOpen ? 'open' : ''}`}>
          {content}
        </div>
      </div>
    )
  }
}

export default Accordion
