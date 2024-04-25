import { useState, useEffect } from "react"
import MoodList from "./MoodList"
import axios from "axios"

function MoodArchive() {
  const [ date, setDate ] = useState<{ year: number, month: number }>({ year: 2024, month: 4 }) // to do: set default for year and month when accessed from front page

  const goPrevMonth = () => {setDate({...date, month: date.month - 1})}
  const goNextMonth = () => {setDate({...date, month: date.month + 1})}

  const [ monthMoods, setMonthMoods ] = useState<any[]>([])

  useEffect(() => {
    const getMonthMoods = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/moods/${date.year}/${date.month}`)
        setMonthMoods(data)
      } catch (error) {
        console.error('Error fetching moods', error)
      }
    }
    getMonthMoods()
  }, [date])

  return (
    <>
      <h1>Mood Archive</h1>
      {monthMoods.length > 0 ?
        <MoodList monthMoods={monthMoods} />
        :
        <div>No moods found for this month</div>}
      <div>
        <span onClick={() => {goPrevMonth()}}>Last Month</span>
        &nbsp;||&nbsp;
        <span onClick={() => {goNextMonth()}}>Next Month</span>
      </div>
    </>
  )
}

export default MoodArchive