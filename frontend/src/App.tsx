import { useEffect, useState } from 'react';
import './App.css'
import MoodDetail from './components/MoodDetail';
import MoodForm from './components/MoodForm';
import axios, { AxiosResponse } from 'axios';

function App() {
  const [todayMood, setTodayMood] = useState<AxiosResponse | null>(null)

  useEffect(() => {
    const getMood = async () => {
      try {
        const mood = await axios.get<string>('http://localhost:8080/api/moods')
        setTodayMood(mood)
      } catch (error) {
        console.error('Error getting mood', error)
      }
    }
    getMood()
  }, [])

  const today = new Date().toLocaleString('en-us', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <>
      {todayMood ?
        <MoodDetail
          today={today}
          todayMood={todayMood}
        />
      :
        <MoodForm
          today={today}
          setTodayMood={setTodayMood}
        />
      }
    </>
  )
}

export default App
