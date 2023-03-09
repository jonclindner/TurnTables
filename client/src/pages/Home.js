import { useState, useEffect } from 'react'

const Home = () => {
  const [fade, setFade] = useState({
    fade: 'bar1'
  })

  useEffect(() => {
    setFade({ fade: 'bar2' })
  }, [])

  return (
    <div className="flex">
      <h1 className={fade.fade}>Welcome to </h1>
      <h1 className={`${fade.fade}  siteTitle`}> TurnTables </h1>
      <h1> </h1>
      <h1 className={fade.fade}>Cool Cats</h1>
    </div>
  )
}
export default Home
