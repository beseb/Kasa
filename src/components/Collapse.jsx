/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../style/components/collapse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Collapse({ title, content, page }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }
  
  if (Array.isArray(content)) {
    return (
      <div className={`collapse__container ${page}`}>
        <div className="collapse__header" onClick={toggleCollapse}>
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
        <div className={`collapse__content ${page} ${isOpen ? 'opened' : 'closed'}` }>
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
      <div className={`collapse__container ${page}`}>
        <div className="collapse__header" onClick={toggleCollapse}>
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
        <div className={`collapse__content ${page} ${isOpen ? 'opened' : 'closed'}`}>
          {content}
        </div>
      </div>
    )
  }
}

export default Collapse
