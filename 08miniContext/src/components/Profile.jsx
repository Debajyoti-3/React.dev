import React ,{useContext}from 'react'
import UserContext from '../context/UserContext'

// example of (use of context for receiving data)

function Profile() {
    const {user} = useContext(UserContext)
  if(!user) return <div>Please Login</div>

  return <div>Welcome {user.username}</div>
}

export default Profile
