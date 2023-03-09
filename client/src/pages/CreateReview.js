import { useState } from 'react'

import { useParams, useNavigate, useLocation } from 'react-router-dom'
import Client from '../services/api'

const CreateReview = ({ user }) => {
  let navigate = useNavigate()
  const location = useLocation()
  const { albumId } = location.state
  // const { user } = { user }
  const initialState = {
    userId: user.id,
    grading: '',
    comment: '',
    albumId: albumId
  }
  let { albumName } = useParams()
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    await Client.post(`/reviews/create-review/${user.id}`, formState)

    setFormState(initialState)

    navigate(-1)
  }
  return (
    <div className="flex">
      <form className="reviewForm" onSubmit={handleSubmit}>
        <label className="noDec" htmlFor="grading">
          Rating
        </label>
        <select id="grading" onChange={handleChange} value={formState.grading}>
          <option value="0"> </option>
          <option value="1">⭐️</option>
          <option value="2">⭐️⭐️</option>
          <option value="3">⭐️⭐️⭐️</option>
          <option value="4">⭐️⭐️⭐️⭐️</option>
          <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
        </select>
        <label className="noDec" htmlFor="comment">
          Comment
        </label>
        <input
          type="text"
          id="comment"
          onChange={handleChange}
          value={formState.comment}
        />

        <button type="submit">Submit Review</button>
      </form>
    </div>
  )
}

export default CreateReview
