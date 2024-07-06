import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div className='help-layout'>
        <h2>
            Website Help
        </h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <nav>
            <NavLink to="Faq">View the FAQ</NavLink>
            <NavLink to="Contact">Contact Us</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}
