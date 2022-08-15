<template>
  <div class="sticker-card">
    <img v-bind:src="sticker.images.preview_gif.url" v-bind:alt="sticker.title">
  </div>
</template>

<script>
export default {
  name: 'Sticker',
  props: {
    sticker: Object
  }
}
</script>

<style scoped>
  .sticker-card {
    border-radius: 10%;
    padding: 10px;
    box-shadow: 0 5px 28px 0 rgb(0 0 0 / 10%);
    backdrop-filter: blur(60px);
    transition: ease-in;
  }

  .sticker-card:hover {
    box-shadow: 0 5px 28px 0 rgb(0 0 0 / 20%);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: contain;
  }

  .sticker-card-footer {
    display: flex;
    justify-content: center;
  }

  a {
    cursor: pointer;
    padding: 4px 12px;
    border-radius: 8px;
    border: none;
    font-size: 14px;
    background: #38a3a5;
    color: #fff;
  }
</style>
