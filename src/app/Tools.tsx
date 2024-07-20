'use client'
const Tools = ({ technologies }: any) => {
  return (
    <div>
      <ul>
        {technologies.map((technologie: any) => (
          <li key={technologie.id}>
            <h2>{technologie.name}</h2>
            <p>{technologie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tools
