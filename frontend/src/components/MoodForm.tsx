import { useForm } from "react-hook-form"

type Inputs = {
  name: string
}

function MoodForm() {
  const {
    register
  } = useForm<Inputs>()

  return (
    <>
      <form>
        <label>Today I feel</label>
        <input {...register('name')} />
      </form>
    </>
  )
}

export default MoodForm