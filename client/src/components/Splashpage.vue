<template>
    <div class="container">
        <h1>The Shifting Dark</h1>
        <p>The Shifting Dark is a single-shot adventure module for Mothership, a science fiction horror RPG by Tuesday Knight Games.</p>
        <p>Below are two different backgrounds to give The Warden a feel for what will be happening in this adventure. The first background sets up the story to contain themes of <span id="boldText">body horror, transformation, and unethical human experimentation</span>. Make sure to have a discussion with the players about their boundaries, and what they are comfortable with. If anybody expresses concerns about these themes, feel free to use the <span id="italicText">2.2: Alternate Background</span> as your guideline for what's happening behind the scenes, or make up your own. Remember, this is a horror adventure, but it should not be horrible to play. Be considerate, be safe, and enjoy <span id=boldText>The Shifting Dark</span></p>


        <AdventureSection header="Section 1: Exposition" body="test" />
    </div>
</template>

<script>

import AdventureSection from './AdventureSection.vue';
// import adv_info from '../assets/TheShiftingDark.json';

export default {
    name: "Splashpage",
    props: {
        msg: String
    },
    components: {
        AdventureSection
    }
}
</script>

<style>
h1 {
    color: #fbff12;
    font-style: italic;

}
p {
    color: #ff206e
}
#boldText {
    font-weight: bold;
}

#italicText {
    font-style: italic;
}
</style>