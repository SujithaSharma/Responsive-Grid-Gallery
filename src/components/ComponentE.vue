<template>
<h2> CompE - I am a  {{sheis}}</h2>
 <ComponentF user="Sujitha"></ComponentF>
</template>

<script>
import ComponentF from './ComponentF.vue'
export default {
    name:"ComponentE",
    props:['sheis'],
    components:{
    ComponentF,
}
}
</script>

<style>

</style>