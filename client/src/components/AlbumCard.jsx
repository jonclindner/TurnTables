import { Link } from "react-router-dom"

const AlbumCard = ({album}) => {
  return (
  <Link to={`/album/${album.albumName}`}>
  
  <div className="albumCard">
  <p>{album.albumName}</p>
  <p>{album.artist.name}</p>
  <img src={album.image_url['#text']} />
</div>
  
  </Link>)
}
export default AlbumCard