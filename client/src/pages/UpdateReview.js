import { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateReview = () => {
  let navigate = useNavigate()
  const initialState = {
    // userId: '',
    grading: '',
    comment: ''
    // albumId: ''
  }
  let { albumId } = useParams()
  console.log(albumId)
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    await axios.post('http://localhost3001/review/updatereview', formState)
    setFormState(initialState)
    navigate('/')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="grading">Rating</label>
      <select id="grading" onChange={handleChange} value={formState.grading}>
        <option value="0"> </option>
        <option value="1">⭐️</option>
        <option value="2">⭐️⭐️</option>
        <option value="3">⭐️⭐️⭐️</option>
        <option value="4">⭐️⭐️⭐️⭐️</option>
        <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
      </select>
      <label htmlFor="comment">Comment</label>
      <input
        type="text"
        id="comment"
        onChange={handleChange}
        value={formState.comment}
      />

      <button type="submit">Submit Review</button>
    </form>
  )
}

export default UpdateReview
