const AlbumCard = ({album}) => {
  return (<div className="albumCard">
  <p>{album.albumName}</p>
  <p>{album.artist.name}</p>
  <img src={album.image_url['#text']} />
</div>)
}
export default AlbumCard