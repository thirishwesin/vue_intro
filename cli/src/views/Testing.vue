<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{msg}}</p>
    <button @click="goBack()" class="btn btn-warning">Go Back</button>
    <p>This is testing for child components.</p>
  </div>
</template>

<script type="text/javascript">
  export default{
    props:{
      msg:null
    },
    data (){
      return {
        title: 'Testing Vue'
      }
    },
    computed: {
      username() {
        // We will see what `params` is shortly
        return this.$route.params.username
      }
    },
    methods: {
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    }
  }
</script>

<style type="text/css">
  
</style>