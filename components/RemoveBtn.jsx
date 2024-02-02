'use client'

import IconButton from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import {useRouter} from 'next/navigation'

function RemoveBtn({noteId, userId}) {

    const router = useRouter();

    const removeNote = async() => {
        const confirmed = confirm("Are you sure? ");
        if (confirmed) {
            try {
                const res = await fetch(`http://localhost:3000/note/${noteId}`, {
                    method: "DELETE",
                    cache: "no-store",
                    body: JSON.stringify({userId})
                })

                if (!res.ok) {
                    throw new Error("Could not delete note")
                }

                router.push("/");
                router.refresh();

            } catch (error) {
                
            }
        }

    }

  return (
        <DeleteIcon onClick={removeNote} />
  )
}

export default RemoveBtn
