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
  let artistName = album.artist.name.replace(/\s+/g, '+').replace(/\//g, '-')
  let albumName = album.albumName.replace(/\s+/g, '+').replace(/\//g, '-')
  let albumId
  const [tagArray, setTagArray] = useState([])
  let addTagArray = []

  const GetAlbumInfo = async (artistName, albumName) => {
    // let albumResult = await GetAlbumDetails(artistName, albumName)
    // console.log(albumResult)
    // albumResult.data.tags.tag.forEach((tag) => {
    //   addTagArray.pop(tag)
    // })
    // setTagArray(addTagArray])
  }

  useEffect(() => {
    const checkAlbumExists = async (artistName, albumName) => {
      let result = await SearchAlbumsFromDb(artistName, albumName)
      console.log(result)
      if (result.data.length !== 0) {
        albumId = result.data[0].id
        return
      } else {
        let res = await AddAlbumToDb({
          name: albumName,
          artist: artistName,
          image: album.large_image_url['#text'],
          releaseDate: '1999'
        })
        albumId = res
      }
    }
    GetAlbumInfo(artistName, albumName)
    checkAlbumExists(artistName, albumName)
  }, [])

  return (
    <div className="albumDetailsBody">
      <img src={`${album.large_image_url['#text']}`} />
      <h1>{album.albumName}</h1>
      <h2>{album.artist.name}</h2>
      <h2>Tags:</h2>

      {tagArray.length === 0 ? (
        <div>len0</div>
      ) : (
        tagArray.map((tag) => <h1>{tag}</h1>)
      )}

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
