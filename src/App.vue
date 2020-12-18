
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
  <Header />
  <div class="container mt-5">
    <div class="row">
      <div class="col form-inline">
        <input id="input-2" v-model="newTask" required placeholder="Enter Task" @keyup.enter="add">
        <button @click="add" variant="primary" class="ml-3">Add</button>
      </div>
    </div>
    <div class="row mt-5">
      <Cards v-bind:cards="cards" v-bind:items="items" v-on:del-item="deleteItem" />
    </div>
  </div>
</template>

<script>
  import uuid from 'uuid';
  import Header from './components/Header';
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
    data() {
      return {
        newTask: "",
        extraCards: [{
          id: 1,
          title: "Details to buy"
        },
        {
          id: 2,
          title: "Details purchased"
        }],
        cards: [{
            id: 1,
            title: "Product list"
          },
          {
            id: 2,
            title: "In production"
          },
          {
            id: 3,
            title: "In stock"
          },
          {
            id: 4,
            title: "Sold out"
          }
        ],
        enabled: true,
        items: [{
            id: 5,
            title: "Code Sign"
          },
          {
            id: 6,
            title: "Test Dash"
          },
          {
            id: 7,
            title: "Style Reg"
          }
        ],
        dragging: false,
      }
    },
    methods: {
      add() {
        if (this.newTask) {
          this.items.push({
            id: uuid.v4(),
            title: this.newTask
          });
          this.newTask = "";
        }
      },
      deleteItem(id) {
        this.items = this.items.filter(item => item.id != id);
        // this.items = this.items.filter(item => item.id != id);
      }
    }
  }
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
