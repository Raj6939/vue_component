<template>
  <h1>Projects
  </h1>
  <div v-for="pro in projects" :key="pro.id" class="project">
        <router-link :to="{name:'ProDetails',params:{ id:pro.id, title:pro.title, srcc:pro.srcc}}">
             
              <h2>{{pro.title}}</h2>  
              <p>{{pro.details}}</p>
              
        </router-link>
        
  </div>
  <!-- <ProDetails /> -->
</template>

<script>
// import ProDetails from './ProDetails.vue'
export default {
    name:'Projects',
    // components:{ProDetails},
data(){
    return{
        projects:[
            {title:'HyperSign', id:1, details:'Secure Your Credentials',srcc:'https://hypersign.id/'},
            {title:'Real DApp', id:2, details:'Real Estate blockchain Solutions',srcc:'https://github.com/Raj6939/Real_DApp'},
            {title:'Ethereum', id:3, details:'World largest Blockchain',srcc:'https://github.com/ethereum'},
            {title:'Cardano', id:4, details:'3rd Generation Blockchain',srcc:'https://github.com/input-output-hk/cardano-sl'},
            {title:'Bitcoin', id:5, details:'Worlds First Blockchain',srcc:'https://github.com/solana-labs/solana'}
            

        ]
    }
}
}
</script>

<style>
.project{
    
    background: #EAC0C0;
    border-radius: 10px;
    padding: 20px;
    margin: 10px auto;
    cursor: pointer;
    /* color: #D86969; */
    max-width: 600px;

}
.project:hover{
    background: #ddd;
}
.project a{
text-decoration: none;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

color: #444;
}
</style>