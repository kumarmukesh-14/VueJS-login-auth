<template>
  <div>
    <h1 @click="globalHelper">This is a Secure Area</h1>
    <BootstrapVueDatatable :items ='posts'> </BootstrapVueDatatable>
  </div>
</template>

<script>

import BootstrapVueDatatable from './BootstrapVueDatatable'
import productmixin from '../mixins/productmixin'

export default {
  name: 'Secure',
  data: () =>{
    return {
      posts: [{
        id:1,
        name:'john',
        profile:'admin'
      },{
        id:2,
        name:'Josaf',
        profile:'sales'
      },{
        id:3,
        name:'Mac',
        profile:'manager'
      }]
    }
  },
  components: {
    BootstrapVueDatatable
  },
  mixins: [productmixin]
}
</script>

<style scoped></style>
