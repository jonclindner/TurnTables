import { useLocation, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  AddAlbumToDb,
  GetAlbumDetails,
  SearchAlbumsFromDb,
  CreateFav
} from '../services/Album'
import { GetReviewByAlbum, DeleteReview } from '../services/Review'

const AlbumDetails = ({ user }) => {
  const location = useLocation()
  const { album } = location.state

  let artistName = encodeURIComponent(album.artist)
  let albumName = encodeURIComponent(album.albumName)

  const [albumId, setAlbumId] = useState('')
  const [tagArray, setTagArray] = useState([])
  const [initialRender, setInitialRender] = useState(true)
  const [clicked, SetClicked] = useState(false)
  let addTagArray = []

  const [songArray, setSongArray] = useState([])
  let addSongArray = []
  const [reviewArray, setReviewArray] = useState()
  console.log(albumId)

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false)
    } else {
      const getReviews = async (id) => {
        let result = await GetReviewByAlbum(id)
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
    makeClicked()
  }
  const makeClicked = () => {
    SetClicked(true)
  }
  console.log(reviewArray)

  return (
    <div className="albumDetailsBody">
      <div className="columnBack">
        <img src={`${album.large_image_url['#text']}`} />
        <h1 className="siteTitle padLeft">{album.albumName}</h1>
        <h2 className="padLeft">{album.artist}</h2>

        {user ? (
          <div className="albumLinks">
            <Link
              to={`/album/review/${album.albumName}`}
              state={{ albumId: albumId }}
              key={album.albumName}
              className="reviewButton"
            >
              <button className="grow reviewButton">Review This Album</button>
            </Link>

            <img
              onClick={AddToFav}
              src={
                clicked
                  ? 'https://img.icons8.com/color/512/star--v1.png'
                  : 'http://cdn.onlinewebfonts.com/svg/img_330749.png'
              }
              className="star"
            ></img>
          </div>
        ) : (
          <h3>You must be logged in to review albums</h3>
        )}
        <div>
          {reviewArray
            ? reviewArray.map((review) => (
                <div>
                  <h3>
                    {review.grading}/5 "{review.comment}" - User {review.userId}
                  </h3>
                </div>
              ))
            : null}
        </div>
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
