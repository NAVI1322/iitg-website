"use client"

import axios from 'axios';
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'

interface Note {
    title: string;
    content: string;
    id: string;
}



const page = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notes, setNotes] = useState<Note[]>([]); 
    const [auth, setAuth] = useState(false);

    const fetchAllNotes = async () => {
        try {
            const data = await axios.get('/api/get-all-notes');
            console.log(data)
            setNotes(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const admin = localStorage.getItem('admin');
        if (admin) {
            setAuth(true);
            fetchAllNotes();
        }
    }, [])

    const deleteNote = async (id: string) => {
        try {
            const data = await axios.post('/api/delete-note', {
                id
            });
            console.log(data)
            fetchAllNotes();
        } catch (error) {
            console.log(error)
        }
    }

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
                            notes.map((note, index) => (
                                <div key={index}>
                                    <p>{note.title}</p>
                                    <button onClick={() => deleteNote(note.id)}>delete</button>
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