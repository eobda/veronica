import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string
}

function MoodForm() {
  const {
    register,
    handleSubmit
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Today I feel</label>
        <input {...register('name')} />
        <button type="submit">Enter</button>
      </form>
    </>
  )
}

export default MoodForm