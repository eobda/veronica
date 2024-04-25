import MoodList from "./MoodList";

function MoodArchive() {
  return (
    <>
      <h1>Mood Archive</h1>
      <MoodList year={2024} month={4} />
    </>
  )
}

export default MoodArchive