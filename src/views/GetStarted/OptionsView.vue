<template>
    <div class="options">
        <!-- <span>{{ $store.state.data }}</span> -->
        <!-- <div class="options" v-for="(option, index) in data" :key="index">
        <p v-for="(thing, indice) in option" :key="indice" >{{ thing }}</p> -->
        <!-- </div> -->
        <div class="buttons">
            <div class="links" v-for="(values, props) in options" :key="props">
                <router-link :to="{ name: 'ModuleView', params: { id: values.index, url: values.url } }">
                    <span>{{ values.index }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ModuleView",
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data: function () {
        return {
            data: [],
            options: []
        }
    },
    beforeMount () {
        fetch(`https://www.dnd5eapi.co${this.id}`)
        .then(response => response.json())
        .then(json => {
            this.data = json;
            // On met à jour le state 'BDD_UPDATE'
            this.$store.commit("DATA_UPDATE", this.data);
            for (const value of Object.values(this.data.results)) {
                this.options = this.options.concat(value);
            }
        });

    }, 
}
</script>
<style scoped>
.options {
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