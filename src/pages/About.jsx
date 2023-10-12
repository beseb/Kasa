import '../style/pages/about.scss'
// On importe le main scss car les marges sont écrites dans le main.scss
import '/src/style/main.scss'
import '../style/components/collapse.scss'
import Collapse from '../components/Collapse'

import Banner from '../components/Banner'
function About() {
  const fiabilité_content =
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les annonces sont régulièrement vérifiées par nos équipes.'
  const respect_content =
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbation du voisinage entraînera une exclusion de notre plateforme.'
  const securite_content =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôtel qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  const service_content =
  "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." 
  return (
    <div id="main">
      <Banner page="about" /><div className="collapse__about--wrapper">
          
          <Collapse title="Fiabilité" content={fiabilité_content} page='about' />
          <Collapse title="Respect" content={respect_content} page='about'/>
          <Collapse title="Service" content={service_content} page='about'/>
          <Collapse title="Sécurité" content={securite_content} page='about' className="Collapse__item--securite"/>
      </div>
    </div>
  )
}

export default About
