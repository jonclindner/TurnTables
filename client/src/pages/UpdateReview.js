import { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import Client from '../services/api'

const UpdateReview = () => {
  let navigate = useNavigate()
  const location = useLocation()
  const { review } = location.state
  const initialState = {
    userId: review.userId,
    grading: review.grading,
    comment: review.comment,
    albumId: review.albumId
  }
  let { albumId } = useParams()
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    await Client.put(`reviews/update-review/${review.id}`, formState)
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

export default UpdateReview
