<template>
  <div class="bar">
    <div class="container">
      <a><img :src="require('@/assets/logo.png')" style="border:1px white solid; margin-left: auto;"></a>
      <router-link :to="{path: '/'}" class="title">SocialOut </router-link>
      <span></span>
      |
      <a><router-link :to="{path: '/'}" class="subtitle">Reported Users</router-link></a>
      |
      <a><router-link :to="{path: '/bannedUsers'}" class="subtitle">Banned Users</router-link></a>
      |
    </div>
  </div>
</template>

<script>
export default {
    name: 'NavigationBar'
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
.container img {
  width: 20px;
  height: 20px;
  margin-top: 9px;
}
.subtitle {
    color: white;
    font-size: 15px;
}
</style>