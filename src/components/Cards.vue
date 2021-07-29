<template>
  <h3  v-for="name in names" :key="name">
    <slot name="slot" :firstName="name.firstName" :lastName="name.lastName">
  </slot></h3>
  <div id="card">
  <div id="title"> 
    <slot name="title"></slot>
  </div>
  <div id="inputs"> 
    <slot></slot>
  </div>
  <div id="button"> 
    <slot name="button"></slot>
  </div>
  </div>
</template>

<script>
export default {
    name:'Cards',
    data(){
      return{
        names:[
          {
            firstName:'Sujitha',
            lastName:'V',
          },
          {
            firstName:'Sriyazhini',
            lastName:'L',
          },
        ]
      }
    }
}
</script>

<style scoped>
#card{
    width:300px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    border:solid 1px gray;
    text-align: center;
    padding:10px;
}
h3{
  color:lightseagreen
}
</style>