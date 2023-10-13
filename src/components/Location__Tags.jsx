/* eslint-disable react/prop-types */
function Location__Tags({ tags }) {

  return (
    <ul
      className="location__tags--container"
    >
      {tags.map((tag, index) => {
        return (
          <li
            key={`${index}`}
           
          >
            {tag}
          </li>
        )
      })}
    </ul>
  )
}

export default Location__Tags
