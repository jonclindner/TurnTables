import { Link } from "react-router-dom"

const AlbumCard = ({album}) => {
  return (
  <Link to={`/album/${album.albumName.replace(/\s+/g, '+').replace(/\//g, "-")}`} state={{album:album}}>
  
  <div className="albumCard">
  <p>{album.albumName}</p>
  <p>{album.artist.name}</p>
  <img src={album.medium_image_url['#text']} />
</div>
  
  </Link>)
}
export default AlbumCard