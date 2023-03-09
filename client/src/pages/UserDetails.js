import { useEffect, useState } from 'react'
import { GetUserFavs, getAlbumsFromDb } from '../services/Album'
import { GetReviewByUser, DeleteReview } from '../services/Review'
import { Link } from 'react-router-dom'

const UserDetails = ({ user }) => {
  const [userReviews, setUserReviews] = useState()
  const [userFavs, setUserFavs] = useState()
  const [albums, setAlbums] = useState()
  const [deleteResult, setDeleteResult] = useState()
  let num = 0
  let counter = 0

  useEffect(() => {
    const getUserReviews = async (id) => {
      let response = await GetReviewByUser(id)
      setUserReviews(response.data)
    }
    const getUserFavs = async (id) => {
      let response = await GetUserFavs(id)
      console.log(response[0].favoritelist)
      setUserFavs(response[0].favoritelist)
    }
    const getAlbums = async () => {
      let response = await getAlbumsFromDb()
      setAlbums(response)
    }
    getAlbums()
    getUserReviews(user.id)
    getUserFavs(user.id)
  }, [deleteResult])

  console.log(userReviews)
  console.log(albums)
  const removeReview = async (id) => {
    console.log('hit')
    let result = await DeleteReview(id)
    setDeleteResult(result)
  }
  console.log(deleteResult)

  return (
    <div>
      <div>
        <h1>Welcome,</h1>
        {user ? <h1 className="siteTitle">{user.name}</h1> : <div></div>}
      </div>

      {userReviews ? (
        <div className="userDetailsBody">
          <h1 className="userDesc">Your reviews:</h1>
          <div className="reviewDiv">
            {userReviews.map((review) => {
              {
                num = review.albumId - 1
                counter += review.grading
              }
              return (
                <div className="reviewColumn">
                  <img
                    src={`${albums[num].image}`}
                    className="albumImg noMarg"
                  ></img>
                  <h3 className="noMarg">
                    On {albums[num].name.replaceAll('+', ' ')}
                  </h3>
                  <h3 className="noMarg">
                    By {albums[num].artist.replaceAll('+', ' ')}
                  </h3>
                  <h3 className="noMarg">
                    "{review.comment}" {review.grading}/5
                  </h3>
                  <div className="iconBody">
                    <Link to="/update-review" state={{ review: review }}>
                      <img
                        className="pencil"
                        src="https://www.seekpng.com/png/full/6-61975_pencil-transparent-png-pictures-proofread-and-edit.png"
                      />
                    </Link>
                    <img
                      src="https://freepngimg.com/save/164915-trash-free-png-hq/512x512"
                      className="pencil"
                      onClick={() => {
                        removeReview(review.id)
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <h1>you do not have reviews</h1>
      )}
      {userFavs ? (
        <div className="userDetailsBody">
          <h1 className="userDesc">Favlist({userFavs.length})</h1>
          <div className="reviewDiv">
            {userFavs.map((album) => {
              return (
                <div className="reviewColumn">
                  <img src={`${album.image}`} className="albumImg"></img>
                  <h3>
                    {album.name.replaceAll('+', ' ')}, &nbsp;
                    {album.artist.replaceAll('+', ' ')}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <h1>you do not have favorite albums</h1>
      )}
    </div>
  )
}
export default UserDetails
