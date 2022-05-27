<template>
  <div class="bar">
    <div class="container">
      <a><img :src="require('@/assets/logo.png')" style="border:1px white solid; margin-left: auto;"></a>
      <router-link :to="{path: '/'}" class="title">SocialOut</router-link>,
      <router-link :to="{path: '/bannedUsers'}" class="item" style="margin-left: 100px;">Banned users</router-link>
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
.item {
  color: white;
  font-weight: bold;
  font-size: 15px;
  text-decoration: none;
}


.pure-menu-item a {
  color: black;
  text-align: right;
}
.pure-menu-link:hover {
  background-color: #38A3A5;
}
.pure-menu-link:focus {
  background-color: #38A3A5;
  color: white;
}
.container img {
  width: 2%;
  height: 2%;
  margin-top: 9px;
}
</style>