import React, { useState , useContext} from 'react'

import UserContext from '../context/UserContext';

// example of (use of context for sending data)

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username, password})
    }
  return (
    <div>
      <h2>login</h2>
      <input type="text" 
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      placeholder='username' />

    {" "}
      {/*  The upper thing gives a space */}

      <input type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder='password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
