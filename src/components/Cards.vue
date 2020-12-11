<template>
    <div class="list" v-bind:key="card.id" v-for="card in cards">
        <p> {{card.title}} </p>
        
        
        <!-- Backlog draggable component. Pass arrBackLog to list prop -->
        <draggable class="list-group kanban-column" :items="items" group="tasks" @change="log">
            <div class="col" v-bind:key="item.id" v-for="item in items">
                {{ item.title }} <button @click="$emit('del-item', item.id)" class="del">x</button>
                
            </div>
        </draggable>
    </div>
</template>

<script>
    //import CardsItem from './CardsItem.vue'
    import {
        VueDraggableNext
    } from 'vue-draggable-next'
    export default {
        name: "Cards",
        components: {
            draggable: VueDraggableNext
            // CardsItem
        },
        props: ["cards", "items"],
        methods: {
            
        }
    }
</script>

<style scoped>
    .container2 {
        position: relative;
        display: flex;
    }
    .list {
        width: 200px;
        background-color: #e3e3e3;
        border-radius: 4px;
        padding: 10px;
        border: 1px solid #999;
        vertical-align: top;
        position: relative;
    }
    .col {
        width: 200px;
        background-color: #e3e3e3;
        border-radius: 4px;
        padding: 10px;
        border: 1px solid #999;
        vertical-align: top;
        position: relative;
    }
</style>

