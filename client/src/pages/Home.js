import { SearchAlbums } from '../services/Album'
import { useEffect } from 'react'

const Home = () => {
  let name = 'Pink FLoyd'

  useEffect(() => {
    const search = async () => {
      let result = await SearchAlbums()
      console.log(result)
    }
    search()
  }, [])
  return <div></div>
}
export default Home
