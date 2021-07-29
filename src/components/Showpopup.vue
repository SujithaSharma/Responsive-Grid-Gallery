<template>
<div>
  <h2>I am a popup</h2>
  <input type="text" v-model="name" />
  <button @click="$emit( 'close' , name)">Close</button>
</div>
</template>

<script>
export default {
  name:"Showpopup",
  emits:{
      close: (name) => {
          if(name == " "){
              return false
          }
          else{
              return true
          }
      }
  },
  data(){
      return{
          name: ' ',
      }
  }
}
</script>
<style>
#input{
    border:solid 1px grey;
    height:1cm;
    width:7cm; 
}
</style>