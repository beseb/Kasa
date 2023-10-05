import '../style/pages/about.scss'
// On importe le main scss car les marges sont écrites dans le main.scss
import '/src/style/main.scss'

import Banner from '../components/Banner'
function About(){
    return <div id='main'>
        <Banner page="about"/>
        <h1>Ceci est la page About</h1></div>
}

export default About