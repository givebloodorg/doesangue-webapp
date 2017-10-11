<template>
  <form @submit.prevent="register" >
    <input v-model="user.email" type="email" placeholder="Email Address" autofocus required>
    <input v-model="user.first_name" type="text" placeholder="First Name"  required>
    <input v-model="user.last_name" type="text" placeholder="Last Name"  required>
    <input v-model="user.username" type="text" placeholder="Username"  required>
     <input v-model="user.birthdate" type="date" placeholder="Birthdate"  required>
    <input v-model="user.password" type="password" placeholder="Password" required>
    <button type="submit">Create Account</button>
  </form>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)

export default {
  data () {
    return {
      user: {
        email: '',
        first_name: '',
        last_name: '',
        username: '',
        birthdate: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      axios.post('https://doesangueapi.herokuapp.com/v1/auth/register', this.user)
      .then(response => {
        Vue.localStorage.set('token', JSON.stringify(response.data.access_token))
      })
      .catch(e => {
        console.log(e)
        alert(e)
      })
    }
  }
}
</script>

<style>

</style>
