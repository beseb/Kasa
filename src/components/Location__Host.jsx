/* eslint-disable react/prop-types */

function Location__Host({name, picture}){

    return <div className="location__host--container"><p className="location__host--name">{name}</p><img src={picture} className="location__host--picture"/></div>
}

export default Location__Host