import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#282c34', color: 'white' , display: 'flex' , justifyContent: 'space-between'}}>
        <h1>Company Logo</h1>
        <ul style={{ display: 'flex' , listStyleType: 'none', gap: '20px' ,flexDirection: 'column', justifyContent: 'space-around' , gap: '10px'}}>
            <li style={{ display: 'flex' , gap: '10px'}}>
                <Link to="/">Home</Link>
            </li>
            <li style={{ display: 'flex' , gap: '10px'}}>
                <Link to="/about">About</Link>
            </li>
            <li style={{ display: 'flex' , gap: '10px'}}>
                <Link to="/services">Services</Link>
            </li>
            <li style={{ display: 'flex' , gap: '10px'}}>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>      
  )
}

export default Navbar