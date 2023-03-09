import Client from './api'

export const GetReviewByUser = async (id) => {
  try {
    const res = await Client.get(`/reviews/get-reviews-by-user-id/${id}`)
    return res
  } catch (error) {}
}
export const GetReviewByAlbum = async (id) => {
  try {
    const res = await Client.get(`/reviews/get-reviews-by-album-id/${id}`)
    return res
  } catch (error) {}
}
export const DeleteReview = async (id) => {
  try {
    const res = await Client.delete(`/reviews/delete/${id}`)
    return res
  } catch (error) {}
}
