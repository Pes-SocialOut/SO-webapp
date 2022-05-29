<template>
 <div class="login">
    <h2 class="title"><a><img :src="require('@/assets/logo.png')" style="border:1px white solid; margin-left: auto; width: 45px; height: 45px;"></a> SocialOut</h2>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#email">Email:</label>
      <input v-model="email" class="form-input" type="email" id="email" required placeholder="Email">
      <label class="form-label" for="#password">Password:</label>
      <input v-model="password" class="form-input" type="password" id="password" placeholder="Password">
      <p v-if="error" class="error">Wrong email or password.</p>
      <input class="form-submit" type="submit" value="Login">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ReportedUsers',
  data: () => ({
    email: '',
    password: '',
    error: false
  }),
  methods: {
    async login() {
      axios({
        url: "v1/admin/login",
        method: "post",
        data: JSON.stringify({
          "email": this.email,
          "password": this.password
        }),
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(response => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token
        this.$router.push('/')
      })
      .catch(() => {
        this.error = true
      })
    }
  }
}
</script>

<style scoped>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
  font-size: 40px;
  margin-top: 2px;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
}
.form-submit {
  background: #38A3A5;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}
</style>
