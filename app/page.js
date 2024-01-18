import Notes from "@/components/Notes";
import NotesSkeleton from "@/components/NotesSkeleton";
import { Suspense } from "react"

export default async function Home() {

  return (
    <Suspense fallback={<NotesSkeleton />}>
      <Notes />
    </Suspense>
  );
}
