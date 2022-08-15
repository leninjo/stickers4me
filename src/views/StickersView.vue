<template>
  <form @submit.prevent="onSubmit">
    <input v-model="coincidence" type="text" placeholder="Escribe una coincidencia y preisona enter...">
  </form>

  <h1>{{ loading ? 'Buscando...' : (!coincidence ? 'Tendencia' : (stickers.length > 0 ? `Coincidiendo con ${coincidence}` : 'Sin resultados')) }}</h1>

  <div v-if="loading" class="loading-container" >
    <img src="@/assets/wait.gif" alt="Espera">
  </div>

  <div class="stickers-grid" v-if="!loading">
    <Sticker v-for="sticker in stickers" :key="sticker.id" :sticker="sticker"/>
  </div>
</template>

<script>
import useStickers from '@/composables/useStickers'
import Sticker from '@/components/Sticker.vue';
import { ref } from 'vue';

export default {
  name: 'StickersView',
  components: {
    Sticker
  },
  setup() {
    const coincidence = ref(null)

    const { loading, stickers, error, getStickers } = useStickers()

    const onSubmit = () => {
      getStickers(coincidence.value)
    }

    console.log(coincidence)

    return {
      loading,
      error,
      stickers,
      coincidence,
      onSubmit
    }
  },
}
</script>

<style scoped>
  .stickers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 2rem;
  }

  h1 {
    text-align: center;
    font-size: 2.5rem;
  }

  input {
    border: 2px solid #d2d2d7;
    border-radius: 12px;
    width: 100%;
    font-size: 24px;
    padding: 12px 20px;
    box-sizing: border-box;
    box-shadow: 0 5px 28px 0 rgb(0 0 0 / 10%);
    color: #22577a;
  }

  input:focus {
    outline: none;
    border: 2px solid #38a3a5;
  }

  .loading-container{
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  .loading-container > img {
    width: 40%;
  }
</style>
