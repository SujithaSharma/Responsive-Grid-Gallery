<template>
 <ComponentC state="positive"></ComponentC>
 <h3>I am a provided {{username}}</h3>
  <props  name="Suji"  sheis="singer"></props>
  <props  :name="name"  :sheis="sheis"></props>
  <props2  id="id" title="Props2" :likes="100" :isVerified="true"></props2>
  <h2>Name - {{ fullname }}</h2>
  <button @click="changename()">Change name</button>
  <br />
  <h2>Total price - {{ total }}</h2>
  <button id="mainbutton">
    <button
      id="pop"
      @click="items.pop({
          product: 'Berry',
          price: 400, })
      "
    >
      -</button
    >Add<button
      id="push"
      @click="
        items.push({
          product: 'Berry',
          price: 400,
        })
      "
    >
      +
    </button>
  </button>
  <input v-model="city" />
  <h2 v-for="item in expensiveitems" :key="item">
    {{ item.product }} - {{ item.price }}
  </h2>
  <h2>Volume (0-30)</h2>
  <h4>Changed volume = {{ volume }}</h4>
  <button @click="volume += 2">Increase</button>
  <button @click="volume -= 2">Decrease</button>
  <br>
  <input type="text" v-model="movie"/>
  <input type="text" v-model="movieInfo.name"/>
  <input type="text" v-model="movieInfo.actor"/>
  <button @click="movieList.push('theri')">Add movie</button>
</template>

<script>
import props from './props.vue'
import props2 from './props2.vue'
import ComponentC from './ComponentC.vue'
export default {
  components:{
    props,
    props2,
    ComponentC,
  },
  provide:{
    username : "Sujitha",
  },
  name: "Property",
  data() {
    return {
      username : "Sujitha",
      name:"Sujitha",
      sheis:"singer",
      firstname: "Sujitha",
      lastname: "V",
      items: [
        {
          product: "apple",
          price: 250,
        },
        {
          product: "orange",
          price: 280,
        },
        {
          product: "mango",
          price: 300,
        },
        {
          product: "Kiwi",
          price: 200,
        },
      ],
      city: " ",
      volume:0,
      movie:'asuran ',
      movieInfo:{
        name:' ',
        actor:' '
      },
      movieList:['asuran','ayan'],
      
    };
  },
  computed: {
    fullname: {
      get() {
        return `${this.firstname} ${this.lastname}`;
      },
      set(names) {
        const name = names.split(" ");
        this.firstname = name[0];
        this.lastname = name[1];
      },
    },
    total() {
      console.log("total");
      return this.items.reduce(
        (total, current) => (total = total + current.price),
        0
      );
    },
    expensiveitems() {
      return this.items.filter((item) => item.price > 200);
    },
  },
  methods: {
    // gettotal() {
    //   console.log("gettotal");
    //   return this.items.reduce(
    //     (total, current) => (total = total + current.price),
    //     0
    //   );
    // },
    changename() {
      this.fullname = "Sindhuja V";
    },
  },
  watch: {
    volume(newvol, oldvol) {
        if (newvol > oldvol && newvol == 26) {
        alert("Volume is too high");
    }
    },
    movie: {
      handler(value){
        console.log(`movie is called  = ${value}`)
      },
      immediate : true,
    },
    movieInfo:{
      handler(name){
        console.log(`movieName is called  = ${name.name} - ${name.actor}`)
      },
      deep : true,
    },
    movieList:{
      handler(list){
        console.log(`Movie is added [${list}]`)
      },
      deep:true
    }
  },
};
</script>
<style>
#mainbutton {
  border: solid black 1px;
  align-items: stretch;
}
#push {
  border-color: transparent;
}
#pop {
  align-content: left;
  border-color: transparent;
}
</style>