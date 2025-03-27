import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings'

const Profile = () => {
  return (
    <div>
        <p>Profile</p>
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
    </div>
  )
}

export default Profile