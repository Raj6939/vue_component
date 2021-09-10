<template>

  <h1>Job Detail page</h1>
  <!-- <p>The job id is  {{id}} </p> -->
  <label>Click Here to get link</label><br> <br>
  <button @click="see" class="cl">Click</button>
</template>

<script>
import Links from './Links.vue'
export default {
  props:['id'] ['title'],
  components:{Links},
data(){
  return{
    id: this.$route.params.id,
    title:this.$route.params.title,
    // srcc:this.$route.params.srcc
  }
},
methods:{
    see(){
        
        if(this.id ==this.$route.params.id){
       var ans=window.prompt('Whats your Project Title?');
       if(this.$route.params.title == ans ){
        
        this.$router.push('/Links/')

       }
       else console.log('sorry');
        }
       
        
        else
        console.log('wrong');
    }
}
}
</script>

<style>
.cl{
background: teal;
border-radius: 5px;
padding: 15px 32px;
text-align: center;
/* text-decoration: seagreen; */
display: inline-block;
font-size: 16px;
color: white;
cursor: pointer;
}
.cl:hover{
    background:darkslategray;
}
</style>