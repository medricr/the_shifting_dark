<template>
    <div id="section">
        <h1>{{header}}</h1>
        <div id="sub-section">
            <p>{{body}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdventureSection',
    props: {
        header: String,
        body: String
    }
}
</script>

<style>
h1 {
    font-style:oblique;
}
#section {
    text-align: left;
}
</style>