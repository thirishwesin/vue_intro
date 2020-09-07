<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="./assets/logo.png" width="30" height="30" alt="" loading="lazy">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/testing">Testing <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/exercise">Exercise</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="row my-3">
        <div class="col-md-12">
          <router-view></router-view>
        </div>
        <!-- <div class="col-md-6">
          <Testing msg="This is inherient data"></Testing>
        </div>
        <div class="col-md-6">
          <Exercise></Exercise>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted(){
      // this.$router.replace('/home')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
