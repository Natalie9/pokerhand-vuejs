<template>
  <div id="app">
    <TheHeader> </TheHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader.vue'

  export default {
    name: 'App',
    components: {
      TheHeader,
    },
  }
</script>

<style>
* { margin: 0 !important; }</style>
