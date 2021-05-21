<template>
    <div>
        {{msg}}
        <p>Add Number 100 + 200 = {{total}}</p>
        <button v-on:click="addNumber()">Add on clcik</button>
        <ul> 
          <li v-rainbow v-for="product in products" :key="product.id">{{product.title}}</li>
        </ul>
    </div>
    
</template>

<script>
export default {
  name: 'PageTwo',
  data() {
      return {
         msg: 'Page One displayed',
         num1:100,
         num2:200,
         total:''
      }
     
  },
  methods: {
      addNumber(){
    return this.total = this.num1 + this.num2;
      }
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  mounted() {
    this.$store.dispatch('getProducts');

  }
}
</script>
