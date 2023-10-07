  import '/src/style/components/banner.scss'
  import '/src/style/main.scss'
  // eslint-disable-next-line react/prop-types
  function Banner__text({page}) {
    if(page === 'about'){
      return <h1 className="banner__text" ><br className="mobile-break"></br></h1>
    }
    return (
      <h1 className="banner__text">
        Chez vous,<br className="mobile-break"></br> partout et ailleurs
      </h1>
    )
  }

  export default Banner__text