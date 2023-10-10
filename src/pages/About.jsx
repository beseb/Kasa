import '../style/pages/about.scss'
// On importe le main scss car les marges sont écrites dans le main.scss
import '/src/style/main.scss'
import '../style/components/collapsible.scss'
import Collapsible from '../components/Collapsible'

import Banner from '../components/Banner'
function About() {
  const fiabilité_content =
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les annonces sont régulièrement vérifiées par nos équipes.'
  const respect_content =
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbation du voisinage entraînera une exclusion de notre plateforme.'
  const securite_content =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôtel qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  const service_content =
    "Kasa est le choix idéal pour trouver des hébergements de qualité pour vos voyages. Nous offrons un large choix de logements confortables et bien équipés, ainsi qu'un service clientèle exceptionnel pour vous aider à trouver l'hébergement qui correspond le mieux à vos besoins."

  return (
    <div id="main">
      <Banner page="about" /><div className="collapsible__about--wrapper">
          
          <Collapsible title="Fiabilité" content={fiabilité_content} page='about' />
          <Collapsible title="Respect" content={respect_content} page='about'/>
          <Collapsible title="Service" content={service_content} page='about'/>
          <Collapsible title="Sécurité" content={securite_content} page='about'/>
      </div>
    </div>
  )
}

export default About
