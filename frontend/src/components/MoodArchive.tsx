import { useState, useEffect } from "react"
import axios from "axios"

/*
- use .map to make table for moods returned by a query
*/

function MoodArchive({ year, month }: { year: Number, month: number }) {
  const [ monthMoods, setMonthMoods ] = useState<any[]>([])

  useEffect(() => {
    const getMonthMoods = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/moods/${year}/${month}`)
        console.log('getMonthMoods:', data)
        setMonthMoods(data)
      } catch (error) {
        console.error('Error fetching moods', error)
      }
    }
    getMonthMoods();
  }, []);

  const moodList = monthMoods.map((mood) => {
    return (
      <tr>
        <td>{mood.date_added}</td>
        <td>{mood.name}</td>
      </tr>
    )
  })

  return (
    <>
      <h1>Mood Archive</h1>
      <table>
        {moodList}
      </table>
    </>
  )
}

export default MoodArchive