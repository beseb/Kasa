import { Link } from 'react-router-dom'
import '../style/pages/erreur.scss'

function Erreur(){

    return <div className='erreur'><h1 className='erreur__title'>404</h1>
    <h2 className='erreur__text'>Oups ! La page que vous demandez n'existe pas.</h2>
    <Link to="/" className='erreur__link'>Retourner sur la page d'accueil</Link>
    </div>
}

export default Erreur