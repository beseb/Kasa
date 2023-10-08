/* eslint-disable react/prop-types */
function Location__Equipments({ equipments }) {
  return (
    <ul className="location__equipments__container">
      {equipments.map((equip, index) => {
        return(
        <li key={index}>{equip}</li>)
      })}
    </ul>
  )
}

export default Location__Equipments
