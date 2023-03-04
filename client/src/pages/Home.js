import { GetTopAlbums, SearchAlbums } from '../services/Album'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    const search = async () => {
      let daresult = await SearchAlbums('queen')
      let result = await GetTopAlbums('disco')
      console.log(result.data[1])
      console.log(daresult)
    }
    search()
  }, [])
  return <div></div>
}
export default Home
