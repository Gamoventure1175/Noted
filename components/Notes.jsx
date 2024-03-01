import NotesList from '@/components/NotesList';
import { getCurrentUser } from '@/models/Users';
import { currentUser } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs';


const createOrGetUser = async() => {

    try {
        const user = await currentUser(); 
        const existingUser = await getCurrentUser(user.id)
        
        if (!existingUser) {
        const res = await fetch("https://notegamoventure.vercel.app/api/user",
        {
            method: "POST", 
            cache: "no-store",
            body: JSON.stringify({userId: user.id, firstName: user.firstName, lastName: user.lastName})
        })

        if (!res.ok) {
            throw new Error("Could not create new user")
        }
        } else {
            console.log("User already exists")
        }
    } catch (error) {
        console.log("Error trying to create user: ", error)
    }

} 

export default async function Notes() {
    const {sessionId} = auth()
    
    if (!sessionId) {
        return(
            <div className="text-center text-2xl">
                Log in to view your notes
            </div>
        )
    }
    try {
        await createOrGetUser()
    } catch (error) {
        console.log(error)
    }
    
    return(
        <NotesList />
    )
    
}