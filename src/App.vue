<template>
  <v-app>
    <v-main>
      <Header />
      <!-- <Home /> -->
       <router-view></router-view>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
// import Home from './views/Home.vue';
// import style from '@/router/vari.scss'

//
</script>

<style lang="scss">
html, body {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  // overflow-y: scroll; /* מבטיח שלא יהיו קפיצות */
  // overflow-x: hidden;
  zoom: 100%;
  user-select: none;
  // $clr1: #93b3ff;
  // color: $clr1;
}

.v-main {
  margin: 0 !important;
  padding: 0 !important;
  font-family: "Fredoka", sans-serif;
  text-align: right;
  // font-family: "Afacad", sans-serif;
  // font-family: "Secular One", sans-serif;
}

.v-main::-webkit-scrollbar {
  display: none;
}
</style>