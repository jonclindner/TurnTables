import { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const CreateReview = () => {
  const initialState = {
    comment: '',
    rating: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    await axios.post('http://localhost3001/api/parks', formState)
    setFormState(initialState)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Comment</label>
      <input
        type="text"
        id="comment"
        onChange={handleChange}
        value={formState.comment}
      />
      <label htmlFor="rating">Rating</label>
      <select id="rating" onChange={handleChange} value={formState.rating}>
        <option value=""> </option>
        <option value="⭐️">⭐️</option>
        <option value="⭐️⭐️">⭐️⭐️</option>
        <option value="⭐️⭐️⭐️">⭐️⭐️⭐️</option>
        <option value="⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️</option>
        <option value="⭐️⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️⭐️</option>
      </select>

      <button type="submit">Submit Information</button>
    </form>
  )
}

export default CreateReview

// const CreateReview = () => {}

// import { useState } from "react"

// const Comment = ({ _id, id, name, comment, handleEdit, handleDelete, handleEditChange, editState}) => {
//   const [toggleEdit, setToggleEdit] = useState(false)

//   return (
//     <div>
//       <div className="mt-4 p-4 rounded-md bg-stone-200">
//         <h2 className="text-2xl font-bold tracking-tight sm:text-2xl">
//           {name}
//         </h2>
//         <p className="mt-4 text-md text-gray-500 sm:mt-3">{comment}</p>
//         {id === sessionStorage.getItem("user") && (
//           <div className="mt-4">
//             <button
//               onClick={() => setToggleEdit(!toggleEdit)}
//               className="bg-black w-16 text-white rounded-2xl text-xs m-1"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => handleDelete(_id)}
//               className="bg-black w-16 text-white rounded-2xl text-xs m-1"
//             >
//               Delete
//             </button>
//           </div>
//         )}
//       </div>

//       {toggleEdit ? (
//         <form
//           onSubmit={(e) => handleEdit(e, _id)}
//           className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
//         >
//           <div className="sm:col-span-2">
//             <div className="flex justify-between">
//               <label
//                 htmlFor="how-can-we-help"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Edit your comment here
//               </label>
//               <span
//                 id="how-can-we-help-description"
//                 className="text-sm text-gray-500"
//               >
//                 Max. 500 characters
//               </span>
//             </div>
//             <div className="mt-1">
//               <textarea
//                 placeholder={comment.comment}
//                 type="text"
//                 id="comment"
//                 onChange={handleEditChange}
//                 value={editState.comment}
//                 name="comment"
//                 aria-describedby="how-can-we-help-description"
//                 rows={4}
//                 className="block w-full rounded-md border-gray-400 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm bg-stone-200"
//               />
//             </div>
//           </div>

//           <div className="text-right sm:col-span-2">
//             <button
//               type="submit"
//               className="inline-flex justify-center rounded-md border border-transparent bg-slate-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-grape-700 focus:outline-none focus:ring-2 focus:ring-grape-500 focus:ring-offset-2"
//             >
//               Post
//             </button>
//           </div>
//         </form>
//       ) : null}
//     </div>
//   )
// }

// export default CreateReview
