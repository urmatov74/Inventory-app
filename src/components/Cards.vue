<template>
  <v-row class="cards-container">
    <v-col v-for="(card,id) in cards" :key="id" :cols="card.flex" fluid fill-height text-right>
      <v-card class="cards">
        <v-card-title>
          {{card.title}}
        </v-card-title>
        <draggable class="list-group kanban-column" :items="items" group="tasks">
          <v-card class="card-items" fluid v-for="(item,id) in items" :key="id" height="150">
            <v-card-title>
              {{item.name}}
              <v-spacer></v-spacer>
              <v-btn @click="deleteItem(item.id)" elevation="2" icon color="black" dark>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text class="card-text">
              <b>Amount:</b> {{item.amount}}
              <br/>
              <b>Size:</b> {{item.size}}
              <br/>
              <b>Color:</b> {{item.color}}
            </v-card-text>
          </v-card>
        </draggable>
        <v-btn @click="dialog2 = true" class="btn-plus" x-small fab dark color="indigo">
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
        <v-dialog v-model="dialog2" :retain-focus="false" max-width="400px">
          <v-card>
            <v-card-title>
              Add Product
            </v-card-title>
            <v-card-text>
              <v-select v-model="prodName" :items="productName" label="Product Name" item-value="text"></v-select>
            </v-card-text>
            <v-card-text>
              <v-select v-model="prodSize" :items="size" label="Size" item-value="text"></v-select>
            </v-card-text>
            <v-card-text>
              <v-select v-model="prodColor" :items="color" label="Color" item-value="text"></v-select>
            </v-card-text>
            <v-card-text>
              <v-text-field v-model="prodAmount" :items="amount" label="Amount" item-value="text"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="dialog2 = false" dark color="indigo">
                Close
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn v-on:click="addItem(card.id), dialog2 = false" class="btn-plus" dark color="indigo">
                Add
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import uuid from 'uuid';
  import draggable from 'vuedraggable'
  export default {
    components: {
      draggable
    },
    name: 'Cards',
    data() {
      return {
        dialog2: false,
        productName: [{
            text: 'Fleece Pants'
          },
          {
            text: 'Joggers'
          },
          {
            text: "Men's Sweatpants"
          }
        ],
        size: [{
            text: '44-52'
          },
          {
            text: '46-54'
          },
          {
            text: '48-56'
          }
        ],
        color: [{
          text: 'black'
        }, {
          text: 'blue'
        }, {
          text: 'khaki'
        }, {
          text: 'gray'
        }, {
          text: 'bordo'
        }],
        cards: [{
            id: 1,
            title: 'Product List',
            flex: 3
          },
          {
            id: 2,
            title: 'In Production',
            flex: 3
          },
          {
            id: 3,
            title: 'In Stock',
            flex: 3
          },
          {
            id: 5,
            title: 'Exported for Sale',
            flex: 3
          },
        ],
        items: [],
        amount: '',
        prodName: '',
        prodSize: '',
        prodAmount: '',
        prodColor: ''
      }
    },
    methods: {
      deleteItem(number) {
        // this.items.pop();
        const index = this.items.findIndex(s => s === number);
        this.items.splice(index, 1);
      },
      addItem(id) {
        console.log(id);
        this.items.push({
          id: uuid.v4(),
          name: this.prodName,
          size: this.prodSize,
          amount: this.prodAmount,
          color: this.prodColor,
        });
        this.prodName = "";
        this.prodSize = "";
        this.prodAmount = "";
        this.prodColor = "";
      },
    },
  }
</script>




<style scoped>
  .btn-plus {
    position: relative;
    display: block;
    margin: 0px 10px 0px auto !important;
  }
  .card-items {
    position: relative;
    box-shadow: 2px;
    border-radius: 4px;
    margin: 10px 10px 10px 10px;
  }
  .cards-container {
    display: flex;
    overflow-x: auto;
    margin: 8px;
  }
  .cards {
    position: relative;
    flex-flow: column wrap;
    width: 100%;
    padding-bottom: 5px;
  }
  .card-text {
    font-size: 15px;
  }
  .kanban-column {
    min-height: 150px;
  }
</style>