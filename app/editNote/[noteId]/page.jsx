import EditNote from "@/components/EditNote";

const getNoteById = async(id) => {
    try {
        const res = await fetch(`https://notedgamovneture.vercel.app/api/note/${id}`, {
            method: "GET",
            cache: "no-store"
        })

        if (!res.ok) {
            throw new Error("Could not retrieve the current note")
        }

        return res.json()

    } catch (error) {
        console.log(error)
    }
}

async function page({params}) {
    const {noteId} = params
    const note = await getNoteById(noteId)
    console.log(note)
    const {title, body, authorId} = note



  return (
    <EditNote noteId={noteId} title={title} body={body} userId={authorId} />
  )
}

export default page
