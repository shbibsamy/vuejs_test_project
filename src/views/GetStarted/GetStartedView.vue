<template>
    <div class="get-started">
        <h2>Get Started</h2>
        <!-- <router-link :to="{ name: 'option'}">{{property}}</router-link> -->

        <div class="buttons" >
            <div class="links" v-for="(option, property) in $store.state.options" :key="property">
            Option{{option}}
                <router-link :to="{ name: 'ModuleView', params: { link: property }}">
                    <span>{{ property }}</span>
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

<style>
.get-started {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

input {
    text-transform: capitalize;
    padding: 0.5rem;
    margin: 0.5rem;
    width: 10rem;
}

input:hover {
    background: darkgray;
    color: white;
}

</style>