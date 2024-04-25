function MoodList(props: any) {
  const { monthMoods } = props

  const moodList = monthMoods.map((mood: any) => {
    return (
      <tr key={mood.id}>
        <td>{mood.date_added}</td>
        <td>{mood.name}</td>
      </tr>
    )
  })

  return (
    <table>
      <tbody>
        {moodList}
      </tbody>
    </table>
  )
}

export default MoodList