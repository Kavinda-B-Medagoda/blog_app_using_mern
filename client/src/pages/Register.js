import React, { useState } from 'react'

function Register() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function register(ev){
    ev.preventDefault();
    await fetch('http://localhost:4000/register',{
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers:{'Content-Type' : 'application/json'}
    })
  }

  return (
    <form action="" className='register' onSubmit={register}>
        <input type="text" placeholder='Username' value={username} onChange={ev=>setUsername(ev.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={ev=>setPassword(ev.target.value)}/>
        <button type='submit'>Register</button>
    </form>
  )
}

export default Register