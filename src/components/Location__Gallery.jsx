

// eslint-disable-next-line react/prop-types
function Location__Gallery({cover}){
console.log(cover);
    return (<img src={cover} style={{width:"100%",height:"415px", backgroundImage:`url(${cover})`, borderRadius:'25px'}}/>)
}

export default Location__Gallery