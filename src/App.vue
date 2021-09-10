<template>
  <div id="nav">
    <router-link to="/" class="Bt">Home</router-link> 
    <router-link to="/about" class="Bt">About</router-link>
    <router-link to="/project" class="Bt">Projects</router-link>
    
  </div>

  <router-view/>
</template>
<script>


export default {
  name:'App',
 
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
 text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  color: black;
  margin: 16px;

}
.Bt:hover {
  background: burlywood;
  color: aqua;

}

#nav a.router-link-exact-active {
  color: white;
  background: teal;
}
.bt{
  margin-right: 16px;
  float: left;
}
</style>
