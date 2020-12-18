<template>
  <v-app>
    <v-app-bar app color="blue" dark>
      <v-toolbar-title>Inventory</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <div class="main-cont">
        <NavBar />
        <Cards />
      </div>
    </v-main>
  </v-app>
</template>

<script>
  import NavBar from './components/NavBar';
  import Cards from './components/Cards';
  
  export default {
    name: 'App',
    components: {
      NavBar,
      Cards
    },
    data: () => ({
      //
    }),
  };
</script>

<style>
  
  html {
    overflow-y: auto;
    overflow-x: hidden;
  }
  .main-cont {
    display: flex;
  }
</style>
