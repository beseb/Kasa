import Collapse from '../components/Collapse'
import Banner from '../components/Banner'
import { useEffect, useState } from 'react'

function About() {
  // Initialisation du state datas
  const [datas, setDatas] = useState([])
  // Fetch des données de la page about
  useEffect(() => {
    fetch('/data/about.json?url')
      .then((response) => response.json())
      .then((data) => {
        setDatas(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <div id="main">
      <div className="container_about_page">
        <Banner page="about" id="banner_about_page" />
        <div className="collapses__section" id="collapses_about_page">
          {datas.map((data, index) => (
            <Collapse
              key={index}
              title={data.title}
              content={data.content}
              page="about"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
