<template>
  <div>
    <div>{{ greet }}{{ name }}</div>
    <div v-pre v-text="welcome"></div>
    <div v-html="welcome1"></div>
    <div v-html="welcome2"></div>
    <div v-html="hack"></div>
    <h2 v-bind:style="{ color: highlightColor }">I am user</h2>
    <h2 v-bind:id="h1">Its my First Vue page</h2>
    <button v-bind:disabled="isDisables">I am disabled</button>
    <h2 class="old">Movie</h2>
    <h2 v-bind:class="['old', 'noworth']">Movie</h2>
    <h2 v-bind:class="[isnew && 'new', isworth ? old : worth]">Movie</h2>
    <h2
      v-bind:class="{
        new: isnew,
        old: !isnew,
        noworth: isworth,
      }"
    >
      Movie
    </h2>
    <h2 v-bind:class="styleObject">CSS properties in pairs</h2>
    <h2 v-if="isnew == true">New Movie</h2>
    <h2 v-else-if="isworth == true">Worth movie</h2>
    <h2 v-else>Old movie</h2>
    <div v-if="isnew == false">
      <h2>Sujitha</h2>
      <h2>Javascript</h2>
    </div>
    <h2 v-show="isnew">Using v-show</h2>
    <h2 v-if="isnew">Using v-if</h2>
    <h2 v-for="name in names" :key="name">{{ name }}</h2>
    <h2 v-for="subject in subjects" :key="subject">
      I love {{ subject.name }}
    </h2>
    <div v-for="actor in actors" :key="actor">
      <h4>{{ actor.name }} acted in</h4>
      <h4 v-for="movie in actor.movies" :key="movie">* {{ movie }}</h4>
    </div>
    <h4 v-for="(value, index, key) in myInfo" :key="value">
      {{ index }} {{ key }} {{ value }}
    </h4>
    <div v-for="name in names" :key="name">
      <h4 v-if="name == 'Abi'">{{ name }}</h4>
    </div>
    <h4>{{ add(1, 2, 3) }}</h4>
    <h4>{{multiply()}}</h4>
    <h4>{{ table() }}</h4>

    <img id="img" src = "../components/css/dot.png"  v-on:mouseover="hoverit()">
  </div>
</template>

<script>
export default {
  name: "first",
  data() {
    return {
      name: "Sujitha",
      greet: "Hello ",
      welcome: "Welcome to VueJs !",
      welcome1: "<b>Welcome to VueJs !</b>",
      welcome2: "<i>Welcome to VueJs !</i>",
      hack: `<a href="#" id = "i" onclick = "alert('You are hacked')" >Touch me to get 1 lakh!</a>`,
      //Binding the HTML
      highlightColor: "Green",
      //Binding the attribute
      heading: "h1",
      //The disabled attribute
      isDisables: true,
      //Applying multiple class attribute
      isnew: false,
      isworth: true,
      //Combining CSS value pairs as objects
      styleObject: { color: "purple", "font-style": "italic" },
      //List rendering using for loop
      names: ["Sujtha", "Yazhini", "Abi"],
      subjects: [
        { name: "Physics" },
        { name: "Maths" },
        { name: "English" },
        { name: "Tamizh" },
        { name: "Chemistry" },
        { name: "Biology" },
      ],
      actors: [
        { name: "Vijay", movies: ["theri", "pokkiri"] },
        { name: "Surya", movies: ["24", "ayan"] },
        { name: "Ajith", movies: ["villan", "veeram"] },
      ],
      myInfo: { name: "sujitha", class: "X", school: "adharsh" },
      no: 10,
    };
  },
  // v-once is used to render object only once and it is static.
  // v-pre element does not allow the compilation of that HTML element.
  methods: {
    add(a, b, c) {
      return a + b + c;
    },
    multiply() {
      for (var a = 1; a <= 10; a++){
        return a*this.no
      }
    },
    table(){
      for(var x=0 ; x<=10; x++){
        document.write("5 x "+ x + "=" + x*5);
      }
    },
    hoverit(){
      document.write("I am a dot");
    }
  }
}
</script>
<style>
.new {
  color: goldenrod;
}
.old {
  color: gray;
}
.noworth {
  color: red;
  font-family: Lemonada;
}
#img{
  height: 1cm;
  width: 1cm;
}
</style>