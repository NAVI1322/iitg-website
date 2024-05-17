"use client"

import Navbar from '@/components/common/Navbar'
import React, { useEffect, useState } from 'react'


interface Note {
  title: string;
  content: string;
}

interface Image {
  url: string;
}


const page = ({ params }: { params: { id: number } }) => {

  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState<Note>({ title: "", content: "" });




  const fetchNote = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/get-note/${params.id}`)
      const data = await res.json()
      console.log(data)
      const { note, images } = data;
      setNote(note);
      setImages(images);

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchNote();
  }, [])

  return (
    <div className='h-screen w-screen flex flex-col items-center'>
      <Navbar />
      <div className='flex flex-col items-center'>
        {
          loading && <h1 className='text-3xl'>Loading... </h1>
        }
        <h2 className='text-2xl font-bold mt-10'>{note.title}</h2>
        {images.map((image) => (
          <>
            <img src={`https://${image.url}`} alt="note image" width={500} height={500} />
            <a href={`https://${image.url}`} download>
              <button>Download Image</button>
            </a>
          </>


        ))}
      </div>

    </div>
  )
}

export default page