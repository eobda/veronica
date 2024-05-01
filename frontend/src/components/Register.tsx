import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  username: string,
  name: string,
  password: string
}

function Register() {
  const {
    register,
    handleSubmit
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    axios.post('http://localhost:8080/api/users/new', formData)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
  }

  return (
    <>
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username</label>
      <input {...register('username')} />
      <label>Password</label>
      <input {...register('password')} />
      <button type="submit">Enter</button>
    </form>
    </>
  )
}

export default Register