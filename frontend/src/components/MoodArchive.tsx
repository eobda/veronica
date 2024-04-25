import { useState } from "react";
import MoodList from "./MoodList";

function MoodArchive() {
  const [ date, setDate ] = useState<{year: number, month: number}>({ year: 0, month: 0 })

  const goPrevMonth = () => {setDate({...date, month: date.month - 1})}
  const goNextMonth = () => {setDate({...date, month: date.month + 1})}

  return (
    <>
      <h1>Mood Archive</h1>
      <MoodList year={date.year} month={date.month} />
      <div>
        <button onClick={() => {goPrevMonth()}}>Last Month</button> ||       <button onClick={() => {goNextMonth()}}>Next Month</button>
      </div>
    </>
  )
}

export default MoodArchive