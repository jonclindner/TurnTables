import { GetTopAlbums, SearchAlbums } from '../services/Album'
import { useEffect, useState } from 'react'

const Feed = () => {
  const [resultArray, setResultArray] = useState([])

  const searchAlbums = async (albumName) => {
    setResultArray(await SearchAlbums(`${albumName}`))
  }
  const renderAlbums = (albumArray) => {
    return albumArray.array.forEach((album) => {
      return <p>album.name</p>
    })
  }

  useEffect(() => {
    const fetchTop = async () => {
      setResultArray(await GetTopAlbums('rap'))
      // console.log(resultArray.data[1])
    }
    fetchTop()
    console.log('hit')
  }, [])
  console.log(resultArray.data)

  return (
    <div>
      {resultArray.length === 0 ? (
        <div></div>
      ) : (
        <div className="feedBody">
          {resultArray.data.map((album) => (
            <div className="albumCard">
              <p>{album.albumName}</p>
              <img src={album.image_url['#text']} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default Feed
