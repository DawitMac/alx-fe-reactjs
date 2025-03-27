import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
        <p>Profile</p>
        <nav>
            <Link to="details">Details</Link>
            <Link to="settings">Settings</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Profile