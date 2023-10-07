import { useState, useEffect } from 'react'
import '../style/components/locations.scss'

// eslint-disable-next-line react/prop-types
function Locations() {
  const [locations, setLocations]  = useState([])

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
        <li key={location.id} className='location__card'>
          <h2 className="location__title">{location.title}</h2>
          <img className="location__img" src={location.cover} alt={location.title} />
        </li>
      ))}
    </ul>
  )
}

export default Locations
