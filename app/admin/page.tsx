"use client"

import axios from 'axios';
import React, { useState } from 'react'


const page = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async () => {
        try {
            const data = await axios.post('/api/create-admin', {
                username,
                password,
            });
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <h1>Admin Page</h1>
        <input type="text" className='border border-black' onChange={(e) => setUsername(e.target.value)}/>
        <input type="password"  className='border border-black' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={onSubmit}>submit</button>
    </div>
  )
}

export default page