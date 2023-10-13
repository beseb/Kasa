import '../style/pages/about.scss'
// On importe le main scss car les marges sont écrites dans le main.scss
import '/src/style/main.scss'
import '../style/components/collapse.scss'
import Collapse from '../components/Collapse'
import {
  fiabilité_content,
  respect_content,
  service_content,
  securite_content,
} from '../../public/data/about.js'
import Banner from '../components/Banner'

function About() {
  return (
    <div id="main">
      <Banner page="about" />
      <div className="collapses__section" id="collapses_about_page">
        <Collapse title="Fiabilité" content={fiabilité_content} page="about" />
        <Collapse title="Respect" content={respect_content} page="about" />
        <Collapse title="Service" content={service_content} page="about" />
        <Collapse title="Sécurité" content={securite_content} page="about" />
      </div>
    </div>
  )
}

export default About
