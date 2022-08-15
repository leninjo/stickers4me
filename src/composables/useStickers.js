import { ref } from 'vue'
import { getAsyncStickers } from '@/api/request'

const useStickers = () => {
  const loading = ref(true)
  const stickers = ref([])
  const error = ref()

  const getStickers = async (path = null) => {
    loading.value = true

    try {
      const response = await getAsyncStickers(path)

      stickers.value = response.data.data
    } catch (error) {
      loading.value = false
      error.value = 'Algo salió mal.'
    }

    loading.value = false
  }

  getStickers()

  return {
    loading,
    stickers,
    error,
    getStickers
  }
}

export default useStickers
