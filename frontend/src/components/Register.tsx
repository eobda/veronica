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
    console.log(formData)
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