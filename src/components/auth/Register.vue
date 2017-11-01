<template>
  <div>
    <form @submit.prevent="register(user)" >
      <input v-model="user.email" type="email" placeholder="Email Address" autofocus required>
      <input v-model="user.first_name" type="text" placeholder="First Name"  required>
      <input v-model="user.last_name" type="text" placeholder="Last Name"  required>
      <input v-model="user.username" type="text" placeholder="Username"  required>
      <input v-model="user.birthdate" type="date" placeholder="Birthdate"  required>
      <input v-model="user.password" type="password" placeholder="Password" required>
      <button type="submit">Create Account</button>
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
        email: '',
        first_name: '',
        last_name: '',
        username: '',
        birthdate: '',
        password: ''
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
      register: 'register'
    })
  }
}
</script>

<style>

</style>
