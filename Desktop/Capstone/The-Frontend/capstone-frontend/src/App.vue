<template>
  <NavBar/>
  <router-view/>
  <Footer/>
</template>

<script>
  import NavBar from "./components/NavBar.vue";
  import Footer from "./components/Footer.vue";
  export default {
    components: {
      NavBar,
      Footer
    },
  };
</script>

<style>
#app {
  font-family: 'Luckiest Guy', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.logo {
  font-size: 30px;
  font-weight: 2000;
  text-decoration: none;
}

@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Sofia+Sans&display=swap')
</style>
