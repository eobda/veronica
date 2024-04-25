import { useState } from "react";
import MoodList from "./MoodList";

function MoodArchive() {
  const [ date, setDate ] = useState<{year: number, month: number}>({ year: 0, month: 0 })
  return (
    <>
      <h1>Mood Archive</h1>
      <MoodList year={date.year} month={date.month} />
    </>
  )
}

export default MoodArchive