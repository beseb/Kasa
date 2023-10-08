/* eslint-disable react/prop-types */
function Location__Tags({ tags }) {
  console.log(tags)

  return (
    <ul
      className="Location__Tags--container"
      style={{ backgroundColor: 'green', height: '100px', width: '100px' }}
    >
      {tags.map((tag, index) => {
        return (
          <li
            key={`${index}`}
            style={{ backgroundColor: 'blue', height: '40px', width: '40px' }}
          >
            {tag}
          </li>
        )
      })}
    </ul>
  )
}

export default Location__Tags
