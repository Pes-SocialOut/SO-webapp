<template>
  <div>
    <div v-if="users.length > 0">
      <div v-for="user in users" :key="user.id">
        <div class="container">
          <div>
            <td class="info">User: </td>
            <td>{{user.user_username}}</td>
          </div>
          <div>
            <td class="info">Email: </td>
            <td>{{user.user_email}}</td>
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Events</th>
                <th>Number of reports</th>
              </tr>
            </thead>
            <tbody v-for="reported_event in user.reported_events" :key="reported_event.id">
                <td>
                  <router-link :to="{ path: '/eventReviews/' + reported_event.event_id }">{{reported_event.event_name}}</router-link>
                </td>
                <td v-if="reported_event.event_num_reports > 2" style="background-color:rgba(255, 0, 0, 0.2);">{{reported_event.event_num_reports}}</td>
                <td v-else>{{reported_event.event_num_reports}}</td>
                <td></td>
                <button v-if="reported_event.event_id === user.reported_events[0].event_id" v-on:click="ban(user.user_id)" class="button">Ban</button>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-else class="advice">No users reported</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ReportedUsers',
  data () {
    return {
      users: [],
      error: ''
    }
  },
  methods: {
    async getUsers() {
      const self = this;
      axios({
        url: "https://socialout-develop.herokuapp.com/v1/admin/reported",
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
    async ban(id) {
      const self = this;
      axios({
        url: "https://socialout-develop.herokuapp.com/v1/admin/ban",
        method: "post",
        data: JSON.stringify({
          "id": id,
        }),
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        },
        withCredentials: true
      })
      .then(() => {
        self.users = self.users.filter(u => {u.id != id});
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
.container {
  background-color: rgba(56, 163, 165, 0.2);
  margin-bottom: 10px;
}
.button {
  border: 2px solid rgb(56, 163, 165);;
  display: inline-block;
  margin-top: 17px;
  border-radius: 4px;
}
.info{
  font-weight: bold;
  padding: 0;
}
.advice{
  margin-top: 30px;
  font-size: 20px;
  text-align: center;
  background-color: rgba(56, 163, 165, 0.2);
}
</style>
