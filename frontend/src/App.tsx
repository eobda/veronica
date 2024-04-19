import { useState } from 'react';
import './App.css'
import MoodDetail from './components/MoodDetail';
import MoodForm from './components/MoodForm';

function App() {
  const [todayMood, setTodayMood] = useState('')

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
