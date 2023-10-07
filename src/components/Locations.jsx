import { useState, useEffect } from 'react'
import '../style/components/locations.scss'


function Locations() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    fetch('/data/logements.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
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
          className="location__card"
          style={{ backgroundImage: `url(${location.cover})` }}
        >
          
          <h2 className="location__title">{location.title}</h2>
        </li>
      ))}
    </ul>
  )
}

export default Locations
