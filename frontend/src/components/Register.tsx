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
      <label htmlFor='username'>Username</label>
      <input
        id='username'
        {...register('username')}
      />
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        {...register('password')}
        type='password'
      />
      <button type="submit">Enter</button>
    </form>
    </>
  )
}

export default Register