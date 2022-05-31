<template>
    <div class="get-started">
        <h2>Get Started</h2>
        <!-- <router-link :to="{ name: 'option'}">{{property}}</router-link> -->

        <div class="buttons" >
            <div class="links" v-for="(property, option) in $store.state.options" :key="option">
                <router-link :to="{ name: 'OptionsView', params: { link: option, id: property } }">
                    <span>{{ option }}</span>
                </router-link>
            </div>
        <!-- <input  type="button" name="" v-bind:id="property" v-bind:value="property"> -->
        </div> 
    </div>
</template>

<script>
export default {
    name: "GetStarted",
    // props: {
        
    // },
    data: function () {
        return {
            options: [],
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.get-started {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
}

.buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1rem;
}

.links {
    display: flex;
    flex-wrap: wrap;
}

a {
    text-transform: capitalize;
    padding: 0.5rem;
    margin: 1rem;
    width: 10rem;
    background: lightgray;
}

a:hover {
    background: darkgray;
    color: white;
}

</style>