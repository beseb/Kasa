/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../style/components/collapsible.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Collapsible({ title, content, page }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapsible = () => {
    setIsOpen(!isOpen)
  }

  if (Array.isArray(content)) {
    return (
      <div className={`collapsible__container ${page}`}>
        <div className="collapsible__header" onClick={toggleCollapsible}>
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
        <div className={`collapsible__content ${page} ${isOpen ? 'open' : ''}` }>
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
      <div className={`collapsible__container ${page}`}>
        <div className="collapsible__header" onClick={toggleCollapsible}>
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
        <div className={`collapsible__content ${page} ${isOpen ? 'open' : ''}`}>
          {content}
        </div>
      </div>
    )
  }
}

export default Collapsible
