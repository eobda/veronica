import './App.css'
import MoodDetail from './components/MoodDetail';
import MoodForm from './components/MoodForm';

function App() {
  const today = new Date().toLocaleString('en-us', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <>
      <MoodForm today={today} />
      <MoodDetail today={today} />
    </>
  )
}

export default App
