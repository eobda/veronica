interface MoodResponse {
  name: string
}

function MoodDetail({ today, todayMood }: { today: string, todayMood: MoodResponse }) {

  const name: string = todayMood.name;

  return (
    <>
      Today is {`${today}`}.<br />
      I feel {`${name}`}.
    </>
  )
}

export default MoodDetail