import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <p>GO to <Link to="/">Home</Link> Page </p>
    </div>
  )
}
