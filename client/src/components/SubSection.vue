<template>
    <div>
        <h2>{{header}}</h2>
    </div>
</template>

<script>
export default {
    name: "SubSection",
    props: {
        header: String,
        body: String
    }
}
</script>

<style>
h2 {
    font-style: oblique;
}
</style>