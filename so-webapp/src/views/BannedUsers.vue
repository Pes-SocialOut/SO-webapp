<template>
  <div class="bar">
    <div class="container">
      <a><img :src="require('@/assets/logo.png')" style="border:1px white solid; margin-left: auto;"></a>
      <router-link :to="{path: '/'}" class="title">SocialOut</router-link>
      <a class="subtitle">Banned users</a>
    </div>
  </div>
  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Ban date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>{{usuario.name}}</td>
          <td>{{usuario.email}}</td>
          <td>{{usuario.website}}</td>
          <button v-on:click="unban" class="button">Unban</button>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BannedUsers',
  data () {
    return {
      error: '',
      usuarios: []
    }
  },
  methods: {
    getUsers () {
      axios
        .get('https://jsonplaceholder.typicode.com/users', {
          headers: {
            'Authorization': 'Bearer ' + this.token,
          }
        })
        .then(response => {
          this.usuarios = response.data;
        })
        .catch(error => {
          this.error = error
        })
    },
    unban () {

    }
  },
  mounted () {
    this.getUsers();
  }
}
</script>

<style scoped>
.bar {
  background-color: #38A3A5;
}
.title {
  color: white;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  margin-left: 10px;
}
.subtitle {
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-left: 200px;
}
.container img {
  width: 2%;
  height: 2%;
  margin-top: 9px;
}
.button {
  background-color: rgba(56, 163, 165, 0.4);
  border: none;
  display: inline-block;
  margin-top: 17px;
  border-radius: 4px;
}
</style>
