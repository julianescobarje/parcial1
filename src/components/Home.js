import Sports from './Sports'
import Stats from './Stats'

function Home({user}) {
  return (
    <>
      <Sports />
      <Stats user={user} />
    </>
  )
}

export default Home