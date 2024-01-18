'use client';

import { useRouter } from 'next/navigation';
import React, { Component, useState } from 'react'
import {Box, TextField, Button} from '@mui/material'
import FormControl from '@mui/material'

function EditNote({noteId, title, body, userId}) {

    const [newTitle, setNewTitle] = useState(title);
    const [newBody, setNewBody] = useState(body);

    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try {
            const res = await fetch(`https://notedgamovneture.vercel.app/api/note/${noteId}`,{
                method: 'PUT',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({newTitle, newBody, userId})
            })
            
            if (!res.ok) {
                throw new Error("Failed to Update Blog. ");
            } 
            
            router.push("/");
            router.refresh();


        } catch (error) {
            console.log(error);
        }
    
    }

  return (
    <form onSubmit={handleSubmit}>
    <Box 
    display={'flex'}
    flexDirection={'column'}
    gap={{sm: 3, md: 6}}
    width={'100%'}
    >
        
        <TextField 
            type='text'
            variant='standard'
            label="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
        />
        <TextField 
            multiline
            type='text'
            variant='standard'
                label="Note"
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
        />
        <Button
            aria-label='submit'
            type='submit'
            variant='outlined'
        >
            Edit Note
        </Button>
    </Box>
    </form>
  )
}
export default EditNote

// export default EditBlog

// {
//     //     <form onSubmit={handleSubmit} className='sm:max-3xl:gap-8 flex my-3 flex-col gap-6 w-full mx-2 sm:max-3xl:mx-3'>
// //     <input value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} className='p-3 bg-red-200 text-black placeholder:text-slate-600 sm:max-3xl:text-lg text-base rounded-xl focus:outline-none shadow-lg shadow-red-300' type="text" placeholder='Author Name'/>
// //     <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="p-3 bg-red-200 text-black placeholder:text-slate-600 sm:max-3xl:text-lg text-base rounded-xl focus:outline-none shadow-lg shadow-red-300" type="text" placeholder='Blog Title'/>
// //     <input value={newBody} onChange={(e) => setNewBody(e.target.value)} className="p-3 sm:max-3xl:text-lg bg-red-200 text-black placeholder:text-slate-600 text-base rounded-xl focus:outline-none min-h-[70px] sm:max-3xl:min-h-[100px] truncate shadow-lg shadow-red-300" type="text" placeholder='Description'/>
// //     <button type="submit"
// //     className="text-base sm:max-3xl:text-xl sm:max-3xl:px-4 font-medium bg-sky-500 w-fit py-2
// //     px-3 rounded-xl border-2 mt-3 mx-auto hover:bg-sky-700 transition-all duration-300 hover:border-sky-700"
// //     >
// //       Edit Blog
// //     </button>
// //   </form>
// }

{/* <TextField 
    //         type='text'
    //         variant='standard'
    //         label="Author Name"
    //         value={newAuthor}
    //         onChange={(e) => setNewAuthor(e.target.value)}
    //     /> */}