<template>
  <div class="hello">
    <h1>{{ msg }} {{myText}}</h1>
    <ul>
      <li v-for="(value, index) in listdata" :key="index"
      @click="$emit('clickedItem', value)"
      >
        {{value}}
      </li>
    </ul>
    <p>Data from vue/prototype method :{{ $parent.clickedItem }}</p>
    <router-link to="/page-one">Page one </router-link>
    <router-link to="/page-two"> Page two</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    listdata: {
      type: Array,
      required: true,
      validator : (value) =>{
        return value.length <= 5;
      }
    }
  },
  inject : ['myText'],
  data() {
    return {
      massege : "child Massege is pass into parant from refs",
      protoMsg : this.$abc
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.router-link-active {
  color: red;
}
</style>
