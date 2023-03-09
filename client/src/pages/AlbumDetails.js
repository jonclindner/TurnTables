import { useLocation, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  AddAlbumToDb,
  GetAlbumDetails,
  SearchAlbumsFromDb,
  CreateFav
} from '../services/Album'
import { GetReviewByAlbum } from '../services/Review'

const AlbumDetails = ({ user }) => {
  const location = useLocation()
  const { album } = location.state
  let artistName = album.artist.replace(/\s+/g, '+').replace(/\//g, '-')
  let albumName = album.albumName.replace(/\s+/g, '+').replace(/\//g, '-')
  const [albumId, setAlbumId] = useState('')
  const [tagArray, setTagArray] = useState([])
  const [initialRender, setInitialRender] = useState(true)
  let addTagArray = []

  const [songArray, setSongArray] = useState([])
  let addSongArray = []
  const [reviewArray, setReviewArray] = useState()

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false)
    } else {
      const getReviews = async (id) => {
        let result = await GetReviewByAlbum(id)
        console.log(result)
        setReviewArray(result.data)
      }
      getReviews(albumId)
    }
  }, [albumId])

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
      })
    }
    const checkAlbumExists = async (artistName, albumName) => {
      let result = await SearchAlbumsFromDb(artistName, albumName)
      if (result.data.length !== 0) {
        console.log('hit')
        setAlbumId(result.data[0].id)

        return
      } else {
        let res = await AddAlbumToDb({
          name: albumName,
          artist: artistName,
          image: album.large_image_url['#text']
        })
        console.log(res)
        setAlbumId(res.id)
      }
    }

    GetAlbumInfo(artistName, albumName)
    checkAlbumExists(artistName, albumName)
  }, [])
  const AddToFav = async () => {
    let result = await CreateFav(user.id, albumId)
    console.log(result)
  }

  return (
    <div className="albumDetailsBody">
      <div className="column">
        <img src={`${album.large_image_url['#text']}`} />
        <h1>{album.albumName}</h1>
        <h2>{album.artist}</h2>

        {user ? (
          <div>
            <Link
              to={`/album/review/${album.albumName}`}
              state={{ albumId: albumId }}
              key={album.albumName}
            >
              {/* <button>Leave a Review</button> */}
              <button>Review This Album</button>
            </Link>

            <button onClick={AddToFav}>Add to favorites</button>
          </div>
        ) : (
          <h3>You must be logged in to review albums</h3>
        )}
        <div></div>
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
