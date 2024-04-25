import { useState, useEffect } from "react"
import axios from "axios"

/*
- use .map to make table for moods returned by a query
*/

function MoodList(props: any) {
  const [ monthMoods, setMonthMoods ] = useState<any[]>([])
  const { date } = props

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

  const moodList = monthMoods.map((mood) => {
    return (
      <tr key={mood.id}>
        <td>{mood.date_added}</td>
        <td>{mood.name}</td>
      </tr>
    )
  })

  return (
    <table>
      <tbody>
        {moodList}
      </tbody>
    </table>
  )
}

export default MoodList