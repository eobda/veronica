import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'

type Inputs = {
  name: string
}

function MoodForm() {
  const {
    register,
    handleSubmit
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios.post('http://localhost:8080/api/moods', data)
  }

  const today = new Date().toLocaleString('en-us', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Today is {`${today}`}. I feel</label>
        <input {...register('name', { required: 'Enter your mood', maxLength: 255 })} />
        <button type="submit">Enter</button>
      </form>
    </>
  )
}

export default MoodForm