<template>
    <div>
        <h3> {{info.name}} </h3>
    </div>
</template>
<script>
export default {
    name: "ModuleView",
    props: {
        url: {
            type: String,
            required: true
        }
    },
    data: function () {
        return {
            info: [],
        }
    },
    beforeMount () {
        fetch(`https://www.dnd5eapi.co${this.url}`)
        .then(response => response.json())
        .then(json => {
            this.info = json;
            // On met à jour le state 'BDD_UPDATE'
            this.$store.commit("INFO_UPDATE", this.info);
            console.log(this.info);
        });

    }, 
}
</script>
<style scoped>
.links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

a {
    text-transform: capitalize;
    padding: 0.5rem;
    margin: 0.5rem;
    width: 10rem;
}

a:hover {
    background: darkgray;
    color: white;
}
</style>