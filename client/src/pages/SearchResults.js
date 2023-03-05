import { GetTopAlbums, SearchAlbums } from '../services/Album'
import { useEffect, useState } from 'react'
import AlbumCard from '../components/AlbumCard'
import { useLocation, useParams } from 'react-router-dom'

const SearchResults = () => {
  const [resultArray, setResultArray] = useState([])
  const [search, setSearch] = useState(useParams())
  console.log(search)

  const location = useLocation()
  const { searchValue } = location.state
  const [albumName, setAlbumName] = useState(searchValue)
  console.log(albumName)

  useEffect(() => {
    const searchAlbums = async (albumName) => {
      setResultArray(await SearchAlbums(`${albumName}`))
    }
    searchAlbums(albumName)
  }, [search, albumName])

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
export default SearchResults
