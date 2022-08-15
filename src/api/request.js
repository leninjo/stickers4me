import axios from 'axios'

const BASE_URL = 'https://api.giphy.com/v1/stickers'
const API_KEY = 'QJoht7bQdGyphz2SZ3Oz2kjAj4WKcjyT'

export const getAsyncStickers = async (path = null) => {
  const requestParams = {
    api_key: API_KEY
  }

  if (path) requestParams.q = path

  const response = await axios.get(
    `${BASE_URL}${path ? '/search' : '/trending'}`,
    {
      params: requestParams
    }
  )

  return response
}

export const getStickerByCoincidence = async () => {}
