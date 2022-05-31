<template>
  <div class="wrap">
    <header>
      <h1>D&D 5e Helper</h1>
    </header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'GetStarted'}">Get Started</router-link> |
      <router-link :to="{ name: 'about'}">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      options: []
    }
  },
  beforeMount () {
    fetch("https://www.dnd5eapi.co/API")
    .then(response => response.json())
    .then(json => {
      this.options = json;
      // On met à jour le state 'BDD_UPDATE'
      this.$store.commit("OPTIONS_UPDATE", this.options);
    });
  },
}

</script>

<style>

/* reset */
*,
::before,
::after {
    box-sizing: border-box;
    color: #141101;
    margin: 0;
    padding: 0;
    font-size: 12px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 70%;
  margin: auto;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

h1 {
  color: #C20114;
  font-size: 3rem;
  padding: 0.5rem;
}

h2 {
  font-size: 2rem;
  padding: 0.5rem;
}

h3 {
  font-size: 1.5rem;
  padding: 0.2rem;
}

p, span, li {
  padding: 0.2rem;
}

nav {
  padding: 20px;
  background: #65010B;
  display: flex;
  justify-content: space-around;
}

nav a {
  font-size: 1.5rem;
  font-weight: bold;
  color: #EEF7FB;
  padding: 15px;
  border-radius: 5px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #EEF7FB;
  background: #C20114;
}
</style>
