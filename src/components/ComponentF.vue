<template>
  <h2>CompF - Hello I am {{user}}</h2>
  <h3>I am an injected {{username}}</h3>
</template>

<script>
export default {
    name:'ComponentF',
    props:[
        'user',
    ],
    inject:['username'],
}
</script>

<style>
</style>