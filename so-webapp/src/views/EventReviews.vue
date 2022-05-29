<template>
  <div class="container">
    <p>
      {{event.name}} - {{username}} ( {{email}} )
      <button v-on:click="ban(event.user_creator)" class="button">Ban</button>
    </p>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Punctuation</th>
          <th>Review</th>
        </tr>
      </thead>
      <tbody v-for="review in reviews" :key="review.user_id">
        <td>{{ review.rating }}</td>
        <td>{{ review.comment }}</td>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EventReviews',
  data () {
    return {
      event: {},
      username: '',
      email: '',
      reviews: [],
      error: ''
    }
  },
  methods: {
    async getReviews() {
      const self = this;
      axios({
        url: "https://socialout-develop.herokuapp.com/v3/events/review?eventid=" + this.$route.params.id,
        method: "get",
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        },
        withCredentials: true
      })
      .then(response => {
        self.event = response.data.event;
        self.username = response.data.username;
        self.email = response.data.email;
        self.reviews = response.data.reviews;
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
        location.reload()
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
    this.getReviews();
  }
}
</script>

<style scoped>
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
