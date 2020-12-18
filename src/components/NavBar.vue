<template>
  <div>
    <v-navigation-drawer permanent :width="180">
      
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>



<script>
  export default {
    name: 'NavBar',
    data() {
      return {
        items: [{
            title: 'Dashboard',
            icon: 'mdi-view-dashboard',
            link: '/Dashboard'
          },
          {
            title: 'Production',
            icon: 'mdi-cog-outline',
            link: '/production'
          },
          {
            title: 'Warehouse',
            icon: 'mdi-warehouse',
            link: '/warehouse'
          },
        ],
        right: null,
      }
    },
  }
</script>

<style scoped>
  
</style>


