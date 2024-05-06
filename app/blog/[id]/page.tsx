"use client"

import Navbar from '@/components/common/Navbar'
import axios from 'axios'
import { title } from 'process'
import React, { useEffect, useState } from 'react'


const page = ({params}: {params: {id: number}}) => {

    const [blog, setBlog] = useState()

    const getBlog = async () => {
        try {
            const res = await axios.get(`/api/get-blog/${params.id}`)
            console.log(res.data);
            setBlog(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getBlog()
    }, [])

  return (
    <div className='flex flex-col h-screen w-screen items-center justify-center'>
        <Navbar />
        <div className='w-3/4 h-screen '>
            <h1 className='text-3xl text-center mt-4 underline font-serif'>{blog?.title}</h1>
            <div dangerouslySetInnerHTML={{__html: blog?.content}} className='mt-4'></div>
        </div>
    </div>
  )
}

export default page