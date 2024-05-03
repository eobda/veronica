import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  username: string,
  name: string,
  password: string
}

function Login() {
  const {
    register,
    handleSubmit
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    axios.post('http://localhost:8080/api/users/login', formData)
      .then((response) => localStorage.setItem('user_id', response.data.id))
      .catch((error) => console.log(error))
  }

  return (
    <>
    <h2>Log In</h2>
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

export default Login