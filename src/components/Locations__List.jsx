import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../style/components/locations__list.scss'

function Locations__List() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    fetch('/data/logements.json')
      .then((response) => response.json())
      .then((data) => {
        setLocations(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <ul className="locations__list">
      {locations.map((location) => (
        <li
          key={location.id}
          className="locations__list--card"
          style={{ backgroundImage: `url(${location.cover})` }}
        >
          <Link
            to={`/Locations/${location.id}`}
            className="locations__list--link"
            style={{ height: '100%', width: '100%' }}
          >
            <h2 className="locations__list--title">{location.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Locations__List
