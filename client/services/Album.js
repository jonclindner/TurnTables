import Client from './api'
require('dotenv').config()
const API_KEY = process.env.API_KEY

export const GetTopAlbums = async (data) => {
  try {
    const res = await Client.get(
      `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${data.tag}&api_key=${API_KEY}&format=json`
    )
    return res.data
  } catch (error) {
    console.log('error in GetTopAlbums')
    throw error
  }
}
export const SearchAlbums = async (data) => {
  try {
    const res = await Client.get(
      `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${data.name}&api_key=${API_KEY}&format=json`
    )
    return res.data
  } catch (error) {}
}
