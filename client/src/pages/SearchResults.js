import { SearchAlbums } from '../services/Album'
import { useEffect, useState } from 'react'
import AlbumCard from '../components/AlbumCard'
import { useLocation, useParams } from 'react-router-dom'

const SearchResults = () => {
  // const [search, setSearch] = useState(useParams())
  // console.log(search)

  const location = useLocation()
  const { searchValue } = location.state
  const [albumName, setAlbumName] = useState()
  const [resultArray, setResultArray] = useState([])

  if (albumName !== location.state.searchValue) {
    setAlbumName(location.state.searchValue)
  }

  useEffect(() => {
    const searchAlbums = async (albumName) => {
      setResultArray(await SearchAlbums(`${albumName}`))
    }
    searchAlbums(albumName)
  }, [albumName])
  console.log(resultArray)

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
