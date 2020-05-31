<template>
  <div class="hello">
    <button @click="getUserInfo"> UserInfo </button>
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      playlists: {},
      url: "http://localhost:3000/auth/spotify"
    }
  },

  methods: {
    getUserInfo: function(){
      let uri = 'http://localhost:3000/users'
      axios.get(uri, {withCredentials: true}).then(console.log)
    },
  //   getPlaylists: function () {
    
  //   let accessToken = ""
  //   let user_id = ""
    
    
  //   let options = {
  //     Authorization: 'Bearer ' + accessToken
  //   }
  // let uri = `https://api.spotify.com/v1/users/${user_id}/playlists`
  // axios.get(uri, {headers: options})
  //   .then((response)=>{
  //     this.playlists = response;
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   })
  //   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
