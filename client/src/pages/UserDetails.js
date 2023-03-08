import { useEffect, useState } from 'react'
import { GetUserFavs } from '../services/Album'
import { GetReviewByUser } from '../services/Review'

const UserDetails = ({ user }) => {
  const [userReviews, setUserReviews] = useState()
  const [userFavs, setUserFavs] = useState()

  useEffect(() => {
    const getUserReviews = async (id) => {
      let resonse = await GetReviewByUser(id)
      setUserReviews(resonse)
    }
    const getUserFavs = async (id) => {
      let resonse = await GetUserFavs(id)
      setUserFavs(resonse)
    }
    getUserReviews(user.id)
    getUserFavs(user.id)
  }, [])

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      {userReviews ? (
        <h1>You have reviews</h1>
      ) : (
        <h1>you do not have reviews</h1>
      )}
      {userFavs ? (
        <h1>You have favorite albums</h1>
      ) : (
        <h1>you do not have favorite albums</h1>
      )}
    </div>
  )
}
export default UserDetails
