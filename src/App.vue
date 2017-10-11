<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <ul class="navbar navbar-nav">
         <router-link to="/">Home</router-link>
         <router-link to="campaigns">Campaigns</router-link>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
