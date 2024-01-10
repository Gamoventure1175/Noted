
import React from 'react';
import RemoveBtn from './RemoveBtn';  
import {AiFillEdit} from 'react-icons/ai';
import { currentUser} from '@clerk/nextjs';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const getAllNotes = async() => {
  try {
    const user = await currentUser()
    const res = await fetch(`http://localhost:3000/api/user/${user.id}`,
    {
      cache: "no-store",
      method: "GET",
    })

    if (!res.ok) {
      throw new Error("Error loading notes")
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function NotesList() {

  const allNotes = await getAllNotes()


  
  return (
    <Grid container spacing={2}>
     {Array.from(allNotes).map((note) => (
        <Grid item xs={12} sm={6} md={4} key={note.id}>
          <Card>
            <CardHeader 
              title={note.title}
              subheader={`${note.author.firstName} ${note.author.lastName}`}
              action={
                <IconButton href={`http://localhost:3000/editNote/${note.id}`}>
                  <AiFillEdit />
                </IconButton>
              }
            />
            <CardContent>
              <Typography variant="h6" color="text.secondary">
                {note.body}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <AiFillEdit />
              </IconButton>
            </CardActions>
          </Card>
      </Grid>
      ))}
  </Grid>
  );
}





{
  //CardHeader
  // action={
  //   <IconButton href={`/editBlog/${blog._id}`}>
  //     <AiFillEdit />
  //   </IconButton>
  // }
}

{/* <Typography variant='body2'>
                  {note.updatedAt}
                </Typography> */}

{/* <RemoveBtn id={note.id} /> */}

{/* <div className=" border-2 w-full flex flex-wrap gap-6">
          {Array.from(allNotes).map((note)=>(
            <div key={note.id} className=" w-full border p-2 grid gap-2">
              <header className='flex justify-between'>
                <div className="text-2xl">{note.title}</div>
                <button className="text-xl"><AiFillEdit/></button>
              </header>
              <div className='text-lg'>
                {note.body}
              </div>
              <footer className='flex justify-between'>
                <div className="text-xs">
                  {`${note.author.firstName} ${note.author.lastName}`}
                </div>
                <div className='text-xl'>
                  <AiFillEdit />
                </div>
              </footer>
            </div>
          ))}
        </div> */}