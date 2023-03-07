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
  const [albumResult, setAlbumResult] = useState()
  let artistName = album.artist.name.replace(/\s+/g, '+').replace(/\//g, '-')
  let albumName = album.albumName.replace(/\s+/g, '+').replace(/\//g, '-')

  const GetAlbumInfo = async (artistName, albumName) => {
    let albumResult = await GetAlbumDetails(artistName, albumName)
    // console.log(albumResult)
  }
  const checkAlbumExists = async (artistName, albumName) => {
    let result = await SearchAlbumsFromDb(artistName, albumName)
    console.log(result)
    if (result) {
      return
    } else {
      let res = await AddAlbumToDb({
        name: albumName,
        artist: artistName,
        image: album.large_image_url['#text'],
        releaseDate: '1999'
      })
      console.log(res)
    }
  }

  useEffect(() => {
    // const addAlbum = async (album) => {
    //   let result = await AddAlbumToDb({
    //     name: album.albumName,
    //     artist: album.artist.name,
    //     image: album.large_image_url,
    //     releaseDate: '1999'
    //   })
    //   console.log(result)
    // }
    // addAlbum(album)
    // GetAlbumInfo(artistName, albumName)
    checkAlbumExists(artistName, albumName)
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
