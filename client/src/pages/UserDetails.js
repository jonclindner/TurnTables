import { useEffect, useState } from 'react'
import { GetUserFavs, getAlbumsFromDb } from '../services/Album'
import { GetReviewByUser, DeleteReview } from '../services/Review'
import { Link } from 'react-router-dom'

const UserDetails = ({ user }) => {
  const [userReviews, setUserReviews] = useState()
  const [userFavs, setUserFavs] = useState()
  const [albums, setAlbums] = useState()
  const [deleteResult, setDeleteResult] = useState()
  const [User, setUser] = useState()
  let num = 0
  let counter = 0

  useEffect(() => {
    const getUserReviews = async (id) => {
      let response = await GetReviewByUser(id)
      setUserReviews(response.data)
    }
    const getUserFavs = async (id) => {
      let response = await GetUserFavs(id)
      setUserFavs(response[0].favoritelist)
    }
    const getAlbums = async () => {
      let response = await getAlbumsFromDb()
      setAlbums(response)
    }
    if (user) {
      getUserReviews(user.id)
      getUserFavs(user.id)
    } else {
      setUser(user)
      console.log(user)
      console.log(User)
    }
    getAlbums()
  }, [deleteResult, user, User])

  const removeReview = async (id) => {
    let result = await DeleteReview(id)
    setDeleteResult(result)
  }

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <h1 className="padLeft">Welcome,</h1>
        {user ? (
          <h1 className="siteTitle padLeft">{user.name}</h1>
        ) : (
          <div></div>
        )}
      </div>

      {userReviews && albums ? (
        <div className="userDetailsBody">
          <h1 className="userDesc padLeft">Your reviews:</h1>
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
          <h1 className="userDesc padLeft">Favlist({userFavs.length})</h1>
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
