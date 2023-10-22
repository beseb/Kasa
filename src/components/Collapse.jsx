/* eslint-disable react/prop-types */
import '../style/components/collapse.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  if (content && Array.isArray(content)) {
    return (
      <section className="collapse">
        <div className="header" onClick={toggleCollapse}>
          {title}{' '}
          <FontAwesomeIcon
            icon={faChevronUp}
            style={{
              transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
              transition: 'all 0.7s ease',
            }}
          />
        </div>
        <div className={isOpen ? 'content open' : 'content'}>
          <ul>
            {content.map((element, index) => {
              return (
                <li key={index} style={{ listStyle: 'none' }}>
                  {element}
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    )
  } else {
    return (
      <section className="collapse">
        <div className="header" onClick={toggleCollapse}>
          {title}
          <FontAwesomeIcon
            icon={faChevronUp}
            style={{ transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)' }}
          />
        </div>
        <div className={isOpen ? 'content open' : 'content'}>{content}</div>
      </section>
    )
  }
}

export default Collapse
