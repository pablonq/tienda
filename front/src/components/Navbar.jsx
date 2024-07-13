import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <Link to="/login">Login</Link>
        </ul>
        <ul>
            <Link to="/home">Home</Link>
        </ul>
        <ul>
            <Link to="/register">Register</Link>
        </ul>
        <ul>
            <Link to="/customers">Costumers</Link>
        </ul>
        
    </nav>
  )
}

export default Navbar