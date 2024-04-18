function MoodDetail({ today }: { today: string }) {

  const mood: string = 'chill' // test mood

  return (
    <>
      Today is {`${today}`}.<br />
      I feel {`${mood}`}.
    </>
  )
}

export default MoodDetail