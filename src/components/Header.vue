<template>
    <div class="row">
        <h1 class="app-name left">Inventory</h1>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

    .row {
        background-color: #205c7e;
        color: #FFF;
        margin: 0;
        padding: .2em;
        overflow: hidden;
    }
    .app-name {
        font-family: 'Yesteryear', cursive;
        color: #fff;
        font-weight: 500;
        font-size: 2em;
        margin: 0;
        padding: 0;
        text-indent: .5em;
    }
</style>