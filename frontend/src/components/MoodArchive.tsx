import { useState, useEffect } from "react"
import axios from "axios"

/*
- use .map to make table for moods returned by a query
*/

function MoodArchive({ year, month }: { year: Number, month: number }) {
  const [ displayMoods, setDisplayMoods ] = useState([])

  useEffect(() => {
    const getMonthMoods = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/moods/${year}/${month}`)
        setDisplayMoods(data)
      } catch (error) {
        console.error('Error fetching moods', error)
      }
    }
    getMonthMoods();
  }, []);

  return (
    <>
      <h1>Mood Archive</h1>
      <table><th>{displayMoods}</th></table>
    </>
  )
}

export default MoodArchive