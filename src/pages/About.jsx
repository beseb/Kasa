import '../style/pages/about.scss'
// On importe le main scss car les marges sont écrites dans le main.scss
import '/src/style/main.scss'
import '../style/components/collapse.scss'
import Collapse from '../components/Collapse'
import AboutDatas from '../../public/data/about.json'
import Banner from '../components/Banner'

function About() {
  const datas = AboutDatas

  return (
    <div id="main" >
      <div id="container_about_page">
        <Banner page="about" id="banner_about_page"/>
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
