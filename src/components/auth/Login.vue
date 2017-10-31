<template>
  <div>
    <form @submit.prevent="login(user)" :class="{ error: errors.lenght > 0 }">
      <input v-model="user.email" type="email" placeholder="Email Address" autofocus required>
      <input v-model="user.password" type="password" placeholder="Password" required>
      <button type="submit">Log In</button>
    </form>
    <br />
    <ul>
      <span v-if="errors.lenght > 0">
        Error:
      </span>
      <br />
      <span v-for="(fields, index) in errors" :key="index">
        <li v-for="error in fields" :key="error">
          {{error}}
        </li>
      </span>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      user: {
        email: 'test@user.com',
        password: '12345678'
      }
    }
  },
  computed: {
    ...mapGetters({
      errors: 'errors'
    })
  },
  methods: {
    ...mapActions({
      login: 'login'
    })
  }
}
</script>

<style>

</style>
