<template>
<div>
  <h2>likes - {{likes}}</h2>
  <h2 v-bind="$attrs">Title - {{title}}</h2>
  <h2>Verified - {{isVerified ? 'Yes' : 'No' }}</h2>
</div>
</template>

<script>
export default {
    name:'props2',
    props:{
        title: {
            type:String,
            required:true,
            default:"Props2 title"
        },
        likes: Number,
        isVerified: Boolean,
    },
    inheritAttrs:false,
}
</script>

<style>
</style>