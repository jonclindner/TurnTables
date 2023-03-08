import { useLocation, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  AddAlbumToDb,
  GetAlbumDetails,
  SearchAlbumsFromDb
} from '../services/Album'

const AlbumDetails = () => {
  const location = useLocation()
  const { album } = location.state
  console.log(album)
  let artistName = album.artist.replace(/\s+/g, '+').replace(/\//g, '-')
  let albumName = album.albumName.replace(/\s+/g, '+').replace(/\//g, '-')
  let albumId
  const [tagArray, setTagArray] = useState([])
  let addTagArray = []

  const [songArray, setSongArray] = useState([])
  let addSongArray = []


  useEffect(() => {
    const GetAlbumInfo = async (artistName, albumName) => {
      await GetAlbumDetails(artistName, albumName).then((response) => {
        response.data.tags.tag.forEach((tag) => {
          addTagArray.unshift(tag.name)
        })
        setTagArray(addTagArray)

        response.data.tracks.track.forEach((song) => {
          addSongArray.unshift(song.name)
        })
        setSongArray(addSongArray)

        console.log(response)
      })
    }
    const checkAlbumExists = async (artistName, albumName) => {
      let result = await SearchAlbumsFromDb(artistName, albumName)
      // console.log(result)
      if (result.data.length !== 0) {
        albumId = result.data[0].id
        return
      } else {
        let res = await AddAlbumToDb({
          name: albumName,
          artist: artistName,
          image: album.large_image_url['#text']
        })
        albumId = res
      }
    }
    GetAlbumInfo(artistName, albumName)
    checkAlbumExists(artistName, albumName)
  }, [])

  return (
    <div className="albumDetailsBody">

      <div className="column">
        <img src={`${album.large_image_url['#text']}`} />
        <h1>{album.albumName}</h1>
        <h2>{album.artist}</h2>

        <Link to={`/album/review/${album.albumName}`} key={album.albumName}>
          {/* <button>Leave a Review</button> */}
          <button>Review This Album</button>
        </Link>
      </div>
      <div className="column">
        <h2>Tags:</h2>
        {tagArray.length === 0 ? (
          <div>No tags</div>
        ) : (
          tagArray.map((tag) => <h3>{tag}</h3>)
        )}
      </div>
      <div className="column tracks">
        <h2>Tracks:</h2>
        {songArray.length === 0 ? (
          <div>No tracks</div>
        ) : (
          songArray.map((track) => <h3>{track}</h3>)
        )}
      </div>

      <div></div>
    </div>
  )
}
export default AlbumDetails
