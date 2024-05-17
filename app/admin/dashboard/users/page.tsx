"use client"

import axios from 'axios';
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'

interface User {
    email: string;

}



const page = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState<User[]>([]); 
    const [auth, setAuth] = useState(false);

    const fetchAllUsers = async () => {
        try {
            const data = await axios.get('/api/fetch-all-users');
            console.log(data)
            setUsers(data.data.users)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteUser = async (email: any) => {
        try {
            const res = await axios.post('/api/delete-user', {
                email
            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const admin = localStorage.getItem('admin');
        if (admin) {
            setAuth(true);
            fetchAllUsers();
        }
    }, [])

    const onSubmit = async () => {
        try {
            const data = await axios.post('/api/check-admin', {
                username,
                password,
            });
            console.log(data)
            if (data) {
                console.log('Admin logged in')
                alert('Admin logged in');
                setAuth(true);
                localStorage.setItem('admin', JSON.stringify(data.data.admin));
            }
        } catch (error) {
            console.log(error)
            alert('Invalid credentials');
        }
    }

    return (
        <div>
            {
                auth ? (
                    <div>
                        {
                            users.map((user, index) => (
                                <div key={index}>
                                    <p>{user.email}</p>
                                    <button onClick={() => deleteUser(user.email)}>delete user</button>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <>
                        <h1>Admin Page</h1>
                        <input type="text" className='border border-black' onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" className='border border-black' onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={onSubmit}>submit</button>
                    </>
                )
            }

        </div>
    )
}

export default page