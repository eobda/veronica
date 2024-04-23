interface MoodResponse {
  name: string
}

function MoodDetail({ today, todayMood }: { today: string, todayMood: MoodResponse }) {

  return (
    <>
      Today is {`${today}`}.<br />
      I feel {`${todayMood.name}`}.
    </>
  )
}

export default MoodDetail