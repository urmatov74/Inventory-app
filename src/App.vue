<template>
  <div id="app">
    <Header />
    <Cards v-bind:cards="cards" />
  </div>
</template>

<script>
  import Header from './components/Header';
  import Cards from './components/Cards';
  export default {
    name: 'App',
    components: {
      Header,
      Cards
    },
    data() {
      return {
        items: [{
            id: 1,
            title: "one"
          },
          {
            id: 2,
            title: "two"
          },
          {
            id: 3,
            title: "three"
          }
        ],
        cards: [{
            id: 1,
            title: "first"
          },
          {
            id: 2,
            title: "second"
          },
          {
            id: 3,
            title: "third"
          }
        ]
      }
    }
  }
</script>

<style>

</style>
