import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Careers() {
  const careers = useLoaderData()
  return (
    <div className='careers'>
      {careers.map(career => (
        <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
        </Link>

      ))}
    </div>
  )
}

//loader function
const url = "http://localhost:4000/careers"
export const careersLoader =async () => {
    const res = await fetch(url)

    if (!res.ok) {
        throw Error("Couldn't fetch the careers")
    }

    return res.json()
}
