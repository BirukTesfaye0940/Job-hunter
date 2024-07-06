import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
    const {id} = useParams()
    const career = useLoaderData()
  return (
    <div className='career-details'>
      <h2>career details for {career.title}</h2>
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className='details'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed commodo dui, eget consequat dolor. Suspendisse potenti. Proin ac urna congue, imperdiet odio sed, blandit mauris. Aliquam finibus efficitur aliquet. Pellentesque sed pulvinar lectus. Etiam dui tellus, vehicula vel egestas eu, fringilla eget orci. Pellentesque sodales justo eros, a aliquam nibh dictum in.
        </p>
      </div>
    </div>
  )
}

//loader function
const url = "http://localhost:4000/careers/"
export const careerDetailsLoader = async ( { params}) => {
    const { id } = params
    const res = await fetch(url + id)

    if (!res.ok) {
        throw Error("Couldn't find the career")
    }

    return res.json()
}