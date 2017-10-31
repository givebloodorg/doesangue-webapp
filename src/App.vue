<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <ul class="navbar navbar-nav">
          <router-link to="/">Home</router-link>
          <router-link to="/campaigns">Campaigns</router-link>
          <router-link to="/auth/signin" v-if="!isLoggedIn">Login</router-link>
          <router-link to="/auth/signup" v-if="!isLoggedIn">Register</router-link>
          <a href="#" @click="logout" v-if="isLoggedIn">Logout</a>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  },
  methods: {
    ...mapMutations({
      logout: 'logout'
    })
  }
}
</script>
