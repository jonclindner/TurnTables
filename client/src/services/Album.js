import Client from './api'

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
      `/api/LastFm/GetAlbumInfo/${artist}/${album}`
    )
    return response
  } catch (error) {
    throw error
  }
}
export const AddAlbumToDb = async (data) => {
  try {
    const response = await Client.post(`/album/create-album`, data)
    return response.data
  } catch (error) {
    throw error
  }
}
export const getAlbumsFromDb = async () => {
  try {
    const response = await Client.get('/album/get-albums')
    return response.data
  } catch (error) {
    throw error
  }
}
export const SearchAlbumsFromDb = async (artist, name) => {
  try {
    const response = await Client.get(
      `/album/get-album-by-name-and-artist/${artist}/${name}`
    )
    return response
  } catch (error) {
    console.log('Error in Search Album')
  }
}
export const GetUserFavs = async (id) => {
  try {
    const response = await Client.get(`album/get-fav-list/${id}`)
    return response.data
  } catch (error) {}
}
export const CreateFav = async (user_id, album_id) => {
  try {
    const response = await Client.post(
      `/album/create-favlist/${user_id}/${album_id}`
    )
    return response.data
  } catch (error) {}
}
