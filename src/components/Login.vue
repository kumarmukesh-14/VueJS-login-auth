<template>
 <div>
   <h1>Login Page</h1>
   <input type="text" name="username" v-model="input.username" placeholder="Username" />
   <input type="password" name="password" v-model="input.password" placeholder="Password" />
   <button type="button" @click="login()">Login</button>
 </div>
</template>

<script>
export default {
  name: 'Login',
  data :() =>{

    return {
      input: {
        username:'',
        password:''
      }
    }

  },
  methods: {
    login() {

      if(this.input.username == "admin" && this.input.password == "pass") {
        this.$store.commit('SET_AUTH', true)
        this.$router.replace({name:'secure'})

      }else {
        alert('Username or Password is not correct')
      }

    }
  }
}
</script>

<style scoped></style>
