import Client from './api'
import axios from 'axios'
const apiKey = process.env.REACT_APP_API_KEY

export const GetTopAlbums = async (tag) => {
  try {
    const response = await Client.get(`/api/LastFm/GetTopAlbumsByTag/${tag}`)
    return response
  } catch (error) {
    console.log('error in GetTopAlbums')
    throw error
  }
}
export const SearchAlbums = async (name) => {
  try {
    const response = await Client.get(`/api/LastFm/SearchAlbumsByName/${name}`)
    return response
  } catch (error) {
    console.log('Error in Search Album')
  }
}
export const GetAlbumDetails = async (artist, album) => {
  try {
    const response = await Client.get(
      `/api/LastFm/GetAlbumDetails/${artist}/${album}`
    )
    return response
  } catch (error) {
    throw error
  }
}
export const AddAlbumToDb = async (album) => {
  try {
    const response = await Client.post(`/album/create-album`)
    return response
  } catch (error) {
    throw error
  }
}
