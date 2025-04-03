import React from 'react'
import { useStore } from '../store/store'


const User = () => {
    const { user } = useStore()
    console.log(user , "user")
  return (
    <div>
        {
         user ? <div>
            <img src={user.avatar_url} alt={user.login} className='w-32 h-32 rounded-full' />
            <h2 className='text-xl font-bold'>{user.login}</h2>
            <p className='text-gray-600'>{user.bio}</p>
            {user.location ? <p className='text-gray-600'>{user.location}</p> : <p className='text-gray-600'>Location not available</p>}
            <p className='text-gray-600'>{user.public_repos} Repositories</p>
            <a href={user.html_url}>Link to bio</a>
            </div> : <div className='flex flex-col items-center justify-center bg-gray-100'>
            <p>Search For a user</p>
         </div>
        }
        </div>
  )
}

export default User