import { useLocation, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GetAlbumDetails } from '../services/Album'

const AlbumDetails = () => {
  const location = useLocation()
  const { album } = location.state
  const [albumName, setAlbumName] = useState()

  useEffect(() => {
    const GetAlbumDetails = async () => {}

    const addAlbum = async (album) => {
      let result = await GetAlbumDetails({
        name: album.albumName,
        artist: album.artist.name,
        image: album.large_image_url,
        releaseDate: '1999'
      })
    }
    addAlbum(album)
  }, [])

  return (
    <div className="albumDetailsBody">
      <img src={`${album.large_image_url['#text']}`} />
      <h1>{album.albumName}</h1>
      <h2>{album.artist.name}</h2>
      <div>
        <Link to={`/album/review/${album.albumName}`} key={album.albumName}>
          {/* <button>Leave a Review</button> */}
          <button>Review This Album</button>
        </Link>
      </div>
    </div>
  )
}
export default AlbumDetails
