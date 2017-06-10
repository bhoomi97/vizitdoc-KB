<template>
    <div id="app">
      	<router-link v-bind:to="'/home'"> Home </router-link>
      	<router-link v-bind:to="'/'"> Logout </router-link>
        <router-view></router-view>
        <card></card>
    </div>
</template>

<script>
    export default {
      name: 'app'
    }
</script>

<style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }

    .card {
      border: 1px solid #ccc;
      box-shadow: 2px 2px 3px #ccc;
      padding: 5px 15px;
      width: 45%;
      margin: 1%; float: left;
    }
    .comments .username {
      font-weight: bold;
      display: block;
    }
    .comments p {
      text-align: left;
      border-left: 2px solid #ccc;
      padding-left: 5px;
    }
</style>
