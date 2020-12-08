<template>
    <div class="cards-info">
        <p>{{card.title}}</p>
    </div>
</template>

<script>
    export default {
        name: "CardsItem",
        props: ["card"]
    }
</script>

<style scoped>
    .cards-info p {
        font-size: 16px;
        font-weight: 700;
    }
</style>