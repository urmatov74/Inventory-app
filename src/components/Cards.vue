<template>
    <div class="container">
        <div class="list list-inline" v-bind:key="card.id" v-for="card in cards">
            <CardsItem v-bind:card="card" />
        </div>
    </div>
</template>

<script>
    import CardsItem from './CardsItem.vue'
    export default {
        name: "Cards",
        components: {
            CardsItem
        },
        props: ["cards"]
    }
</script>

<style scoped>
    .container {
        padding: 20px;
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
</style>

