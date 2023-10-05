import '/src/style/components/banner.scss'
// On importe le main scss car les marges sont écrites dans le main.scss
import '/src/style/main.scss'

// La propriété 'page' est attendue dans les props
function Banner({ page }) {
  let banner__text = 'Chez vous, partout et ailleurs';

  if (page === 'about') {
    banner__text = '';
  }
  
  return (
    <div className={`banner`} id={page}>
      <div className="banner__content">
        <h1 className="banner__text">{banner__text}</h1>
      </div>
    </div>
  );
}

export default Banner;
