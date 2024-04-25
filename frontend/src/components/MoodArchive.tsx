import { useState } from "react";
import MoodList from "./MoodList";

function MoodArchive() {
  const [ date, setDate ] = useState<{ year: number, month: number }>({ year: 2024, month: 4 })

  const goPrevMonth = () => {setDate({...date, month: date.month - 1})}
  const goNextMonth = () => {setDate({...date, month: date.month + 1})}

  return (
    <>
      <h1>Mood Archive</h1>
      <MoodList date={date} />
      <div>
        <span onClick={() => {goPrevMonth()}}>Last Month</span>
        &nbsp;||&nbsp;
        <span onClick={() => {goNextMonth()}}>Next Month</span>
      </div>
    </>
  )
}

export default MoodArchive