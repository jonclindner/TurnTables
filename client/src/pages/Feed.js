import { GetTopAlbums } from '../services/Album'
import { useEffect, useState } from 'react'
import AlbumCard from '../components/AlbumCard'
import { useLocation } from 'react-router-dom'

const Feed = () => {
  const location = useLocation()
  const { genre } = location.state

  const [resultArray, setResultArray] = useState([])
  const [albumGenre, setAlbumGenre] = useState('pop')

  if (albumGenre != genre) {
    setAlbumGenre(genre)
  }

  useEffect(() => {
    const fetchTop = async () => {
      setResultArray(await GetTopAlbums(`${albumGenre}`))
    }
    setAlbumGenre(genre)
    fetchTop()
  }, [albumGenre])

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
