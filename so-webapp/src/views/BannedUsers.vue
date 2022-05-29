<template>
  <div class="container">
    <div v-if="users.length < 1">No users banned</div>
    <div v-else>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Ban date</th>
          </tr>
        </thead>  
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{user.username}}</td>
            <td>{{user.email}}</td>
            <td>{{user.date}}</td>
            <button v-on:click="unban(user.email)" class="button">Unban</button>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BannedUsers',
  data () {
    return {
      error: '',
      users: []
    }
  },
  methods: {
    async getUsers() {
      const self = this;
      axios({
        url: "https://socialout-develop.herokuapp.com/v1/admin/banned",
        method: "get",
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        },
        withCredentials: true
      })
      .then(response => {
        self.users = response.data;
      })
      .catch(error => {
        if (error.response) {
          if  (error.response.status === 401)
            self.$router.push('/login');
          else 
            self.error = error.response.data.error_message;
        }
      })
    },
    async unban(email) {
      const self = this;
      axios({
        url: "https://socialout-develop.herokuapp.com/v1/admin/unban",
        method: "post",
        data: JSON.stringify({
          "email": email,
        }),
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        },
        withCredentials: true
      })
      .then(() => {
        self.users = self.users.filter(u => {u.email != email});
      })
      .catch(error => {
        if (error.response) {
          if  (error.response.status === 401)
            self.$router.push('/login');
          else 
            self.error = error.response.data.error_message;
        }
      })
    }
  },
  mounted () {
    this.getUsers();
  }
}
</script>

<style scoped>
.button {
  background-color: rgba(56, 163, 165, 0.4);
  border: none;
  display: inline-block;
  margin-top: 17px;
  border-radius: 4px;
}
.container {
  background-color: rgba(56, 163, 165, 0.2);
}
</style>
