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
  const [note, setNote] = useState<Note>({ title: "", content: "" });



  const [title, setTitle] = useState("");

  const fetchNote = async () => {
    const res = await fetch(`/api/get-note/${params.id}`)
    const data = await res.json()
    console.log(data)
    const { note, images } = data;
    setNote(note);
    setImages(images);

  }


  useEffect(() => {
    fetchNote();
  }, [])

  return (
    <div className='h-screen w-screen flex flex-col items-center'>
      <Navbar />
      <div className='flex flex-col items-center'>
        <h2 className='text-2xl font-bold'>{note.title}</h2>
        {images.map((image) => (
          <>
            <img src={`https://${image.url}`} alt="note image" width={500} height={500} />
            <a href={`https://${image.url}`} download>
              <button>Download Image</button>
            </a>
          </>


        ))}
      </div>

      <h2>{params.id}</h2>
    </div>
  )
}

export default page