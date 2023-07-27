<script>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'

  export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style>
:root {
  --orange: #E88607;
  --lightorange: #ff9c4a;
  --lightgray: #a0a0a0;
  --darkgray: #181818;
  --green: #2cce7d;
  --red: #fa3d3d;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Monserat', sans-serif;
  list-style: none;

  
}
a {
    text-decoration: none;
    color: black;
}

body {
  background-color: #fff;
}

</style>

