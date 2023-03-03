import Client from './api'
import axios from 'axios'
const apiKey = process.env.REACT_APP_API_KEY

export const GetTopAlbums = async (data) => {
  try {
    const res = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${data.tag}&api_key=${apiKey}&format=json`
    )
    return res.data
  } catch (error) {
    console.log('error in GetTopAlbums')
    throw error
  }
}
export const SearchAlbums = async (req, res) => {
  try {
    const response = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=album.search&album='queen'&api_key=${apiKey}&format=json`
    )
    // const response = await axios.get(
    //   `http://ws.audioscrobbler.com/2.0/?method=album.search&album='Queen'&api_key=cef4b6002340af81c05aa7a66e2661e5&format=json`
    // )
    return response.data
  } catch (error) {
    console.log('Error in Search Album')
  }
}
