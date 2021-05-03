<template>
    <div class="container">
        <h1>The Shifting Dark</h1>
        <p>A single-shot adventure module for the Mothership RPG.</p>
        <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
    name: "Splashpage",
    props: {
        msg: String
    }
}
</script>

<style>
.container {
    background-color: black;
    color: white;
}
</style>