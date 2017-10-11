<template>
  <form @submit.prevent="login" :class="{ error: failed }">
    <input v-model="email" type="email" placeholder="Email Address" autofocus required>
    <input v-model="password" type="password" placeholder="Password" required>
    <button type="submit">Log In</button>
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
      email: '',
      password: '',
      failed: false
    }
  },
  methods: {
    login () {
      axios.post('https://doesangueapi.herokuapp.com/v1/auth/login',
        { email: this.email, password: this.password })
      .then(response => {
        Vue.localStorage.set('token', JSON.stringify(response.data))
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
