import { Link } from 'react-router-dom'

function Erreur() {
  return (
    <div id="main">
      <div className="erreur">
        <h1 className="erreur__title">404</h1>
        <h2 className="erreur__text">
          Oups ! La page que vous demandez n'existe pas.
        </h2>
        <Link to="/Accueil" className="erreur__link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  )
}

export default Erreur
