<template>
  <div id="app">
    <poster></poster>
  </div>
</template>

<script>
import Poster from './pages/poster.vue'

export default {
  name: 'app',
  components: {
    Poster
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
