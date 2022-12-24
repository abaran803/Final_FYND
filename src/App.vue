<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    const lc = JSON.parse(localStorage.getItem('userData'))
    const data = lc && lc["_doc"];
    data && this.$store.dispatch('fetchCart', data._id)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
    background-color: #f6f7f9;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
