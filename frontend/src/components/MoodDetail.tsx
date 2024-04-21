import { AxiosResponse } from 'axios'

function MoodDetail({ today, todayMood }: { today: string, todayMood: AxiosResponse }) {

  return (
    <>
      Today is {`${today}`}.<br />
      I feel {`${todayMood}`}.
    </>
  )
}

export default MoodDetail