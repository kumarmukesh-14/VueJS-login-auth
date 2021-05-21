<template>
  <div>
    <h1>This is a Secure Area</h1>
    <BootstrapVueDatatable :items ='posts'> </BootstrapVueDatatable>
  </div>
</template>

<script>

import BootstrapVueDatatable from './BootstrapVueDatatable'


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
  }
}
</script>

<style scoped></style>
