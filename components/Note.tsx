import {
    Card, 
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'

import { NotesProps } from '@/types/components/types';

const Note: React.FC<NotesProps> = ({noteId, title, body}) => {
    return(
        <Card>
            <CardTitle>{title}</CardTitle>
            <CardContent>
                <p>{body}</p>
            </CardContent>
            <CardFooter>
                <p>{noteId}</p>
            </CardFooter>
        </Card>
    )
}

export default Note;