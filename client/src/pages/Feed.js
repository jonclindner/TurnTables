import { GetTopAlbums } from '../services/Album'
import { useEffect, useState } from 'react'
import AlbumCard from '../components/AlbumCard'

const Feed = () => {
  const [resultArray, setResultArray] = useState([])
  const [albumGenre, setAlbumGenre] = useState('pop')

  useEffect(() => {
    const fetchTop = async () => {
      setResultArray(await GetTopAlbums(`${albumGenre}`))
    }
    fetchTop()
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
