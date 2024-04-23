import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'

type Inputs = {
  name: string
}

function MoodForm({ today, setTodayMood }: { today: string, setTodayMood: (todayMood: {name: string} | null) => void }) {
  const {
    register,
    handleSubmit
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    axios.post('http://localhost:8080/api/moods', formData)
      .then((response) => setTodayMood(response.data.name))
      .catch((error) => console.log(error))
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Today is {`${today}`}.<br />
          I feel
        </label>
        <input {...register('name', { required: 'Enter your mood', maxLength: 255 })} />
        <button type="submit">Enter</button>
      </form>
    </>
  )
}

export default MoodForm