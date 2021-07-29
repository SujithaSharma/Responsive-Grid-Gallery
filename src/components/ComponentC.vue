<template>
<h2>CompC - I am a {{state}} person</h2>
  <ComponentE sheis="singer"></ComponentE>
</template>

<script>
import ComponentE from './ComponentE.vue'
export default {
    name:"ComponentC",
    props:['state'],
    components:{
    ComponentE,
}
    
}
</script>

<style>

</style>