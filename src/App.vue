<template>
  <div id="app">
    <!-- <HelloWorld ref="child" msg="Vue Routing" :listdata="items" @clickedItem ="getClickedItem"/>
    <p>ClickedItem : {{ clickedItem }} </p> -->
    <router-view />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data: () => {
    return {
      items:['first','second','third'],
      clickedItem:'',
    }
  },
  components: {
  //  HelloWorld
  },
  methods:{
    getClickedItem(value) {
      this.clickedItem = value;
      console.log(this.$refs.child.$data.massege,'==child')
    }
  },
  provide() {
    return { myText : 'Hello Mukesh'}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
