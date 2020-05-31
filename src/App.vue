<template>
  <div id="app">
    <div v-if="loggedIn">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <a :href="logoutUrl">Log Out</a>
      </div>
      <router-view />
    </div>
    <div v-else>
      <a :href="loginUrl">Log In</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const serverBaseUrl = process.env.VUE_APP_SERVER_BASE_URL;

export default {
  data() {
    return {
      // loggedIn: true
      logoutUrl: `${serverBaseUrl}/auth/logout`,
      loginUrl: `${serverBaseUrl}/auth/spotify`
    }
  },
  computed: {
    loggedIn() {
      return Boolean(this.$store.state.user)
    }
  },
    mounted () {
    let url = `${serverBaseUrl}/users`
    axios.get(url, {withCredentials:true})
      .then(
        (response)=>this.$store.dispatch('updateUser', response.data)
      )
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
