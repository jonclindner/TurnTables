import { Link } from "react-router-dom"

const AlbumCard = ({album}) => {
  return (
  <Link className="albumCard" to={`/album/${album.albumName.replace(/\s+/g, '+').replace(/\//g, "-").replaceAll('?', '%3F')}`} state={{album:album}}>
    <div className="cardText">
  <p className="noDec">{album.albumName}</p>
  <p className="noDec">{album.artist}</p>

    </div>
  <img className="card"src={album.medium_image_url['#text']} />

  </Link>)
}
export default AlbumCard