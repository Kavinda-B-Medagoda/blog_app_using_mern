import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
        <Link to="/" className="logo">Blog</Link>
        <nav>
            <Link to="/login" className="login">Login</Link>
            <Link to="/register" className="register">Register</Link>
        </nav>
  </header>
  )
}

export default Header