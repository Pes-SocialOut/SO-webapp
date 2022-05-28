<template>
  <div class="bar">
    <div class="container">
      <a><img :src="require('@/assets/logo.png')" style="border:1px white solid; margin-left: auto;"></a>
      <router-link :to="{path: '/'}" class="title">SocialOut</router-link>
      <a class="subtitle">Reported users</a>
    </div>
  </div>
  <div>
    <div v-for="user in users" :key="user.id" class="container">
      <p>{{ user.username }}</p>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Events</th>
            <th>Number of reports</th>
          </tr>
        </thead>
        <tbody>
          <td>{{user.name}}</td>
          <td v-if=true style="background-color:rgba(255, 0, 0, 0.2);">{{user.email}}</td>
          <td v-else>{{user.email}}</td>
          <td></td>
          <button v-on:click="ban" class="button">Ban</button>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BannedUsers',
  data () {
    return {
      error: '',
      users: []
    }
  },
  methods: {
    getUsers () {

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
  line-height: 0.5px;
}
.subtitle {
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-left: 200px;
  line-height: 0.5px;
}
.container img {
  width: 2%;
  height: 2%;
  margin-top: 9px;
}
.container {
  background-color: rgba(56, 163, 165, 0.2);
}
.button {
  border: 2px solid rgb(56, 163, 165);;
  display: inline-block;
  margin-top: 17px;
  border-radius: 4px;
}
p{
  text-decoration-line: underline;
}
</style>
