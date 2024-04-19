function MoodDetail({ today, todayMood }: { today: string, todayMood: string }) {

  return (
    <>
      Today is {`${today}`}.<br />
      I feel {`${todayMood}`}.
    </>
  )
}

export default MoodDetail