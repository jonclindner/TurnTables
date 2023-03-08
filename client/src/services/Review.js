import Client from './api'

export const GetReviewByUser = async (id) => {
  try {
    const res = await Client.get(`/review/get-reviews-by-user-id/${id}`)
    return res
  } catch (error) {}
}
