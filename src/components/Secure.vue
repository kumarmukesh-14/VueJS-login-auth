<template>
  <div>
    <h1 @click="globalHelper">This is a Secure Area</h1>
    
    <Breadcrumb class="row justify-content-center mt-4" :crumbs="crumbs" @selected="selected"></Breadcrumb>

    <BootstrapVueDatatable :items ='posts'> </BootstrapVueDatatable>
  </div>
</template>

<script>

import BootstrapVueDatatable from './BootstrapVueDatatable'
import productmixin from '../mixins/productmixin'
import Breadcrumb from '../components/Breadcrumb.vue'
export default {
  name: 'Secure',
  data() {
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
      }],
      crumbs: ['Home', 'Categoory', 'Sub Category']
    }
  },
  components: {
    BootstrapVueDatatable,
    Breadcrumb
  },
  mixins: [productmixin],
  methods: {
    selected(crumb) {
      console.log(crumb)
    }
  }
}
</script>

<style scoped></style>
