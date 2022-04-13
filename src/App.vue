

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorldVue2 msg="Hello Vue 3 + Vite" />
    <!-- <HelloWorldVue3 msg="Hello Vue 3 + Vite" /> -->
  </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorldVue2 from './components/HelloWorldVue2.vue'
// import HelloWorldVue3 from './components/HelloWorldVue3.vue'
export default {
  name: 'App',
  components: {
    HelloWorldVue2,
    // HelloWorldVue3
  },



}
</script>

<style lang="scss">
/* $font-stack:  Helvetica, sans-serif;
$font-size:  30px;
$primary-color: #333; */

body {
  font: 100% $font-stack;
  color: $primary-color;
  background: $bg-color;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: $primary-color;
  margin-top: 60px;
  font-size: $font-size;

  display: grid;
  place-items: center;


  div {
    border: 1px dashed orange;
    @apply border border-red-800 m-5 p-5
  }

}
</style>
