import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const AlbumDetails = () => {
  const location = useLocation()
  const { album } = location.state
  const [albumName, setAlbumName] = useState()
  console.log(album)
  console.log(album.artist)

  return (
    <div className="albumDetailsBody">
      <img src={`${album.large_image_url['#text']}`} />
      <h1>{album.albumName}</h1>
      <h2>{album.artist.name}</h2>
    </div>
  )
}
export default AlbumDetails
