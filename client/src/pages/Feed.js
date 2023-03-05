import { GetTopAlbums, SearchAlbums } from '../services/Album'
import { useEffect, useState } from 'react'
import AlbumCard from '../components/AlbumCard'

const Feed = () => {
  const [resultArray, setResultArray] = useState([])
  const [albumGenre, setAlbumGenre] = useState('pop')

  const searchAlbums = async (albumName) => {
    setResultArray(await SearchAlbums(`${albumName}`))
  }

  useEffect(() => {
    const fetchTop = async () => {
      setResultArray(await GetTopAlbums(`${albumGenre}`))
      // console.log(resultArray.data[1])
    }
    fetchTop()
    console.log('hit')
  }, [])

  return (
    <div>
      {resultArray.length === 0 ? (
        <div></div>
      ) : (
        <div className="feedBody">
          {resultArray.data.map((album) => (
            <AlbumCard album={album} />
          ))}
        </div>
      )}
    </div>
  )
}
export default Feed
