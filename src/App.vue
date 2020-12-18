<template>
  <v-app>
    <v-app-bar app color="blue" dark>
      <router-link class="title-bar" to="/Dashboard">
        <v-toolbar-title>Inventory</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <router-link class="title-bar" to="/Logout">
        <v-toolbar-title>
          <v-btn icon>
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </v-toolbar-title>
      </router-link>
    </v-app-bar>
    <v-main>
      <div class="main-cont">
        <NavBar />
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
  import NavBar from './components/NavBar';
  // import Cards from './components/Cards';
  export default {
    name: 'App',
    components: {
      NavBar,
      // Cards
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
    height: 100%;
  }
  .title-bar {
    display: block;
    color: white !important;
    text-decoration: none;
  }
</style>
