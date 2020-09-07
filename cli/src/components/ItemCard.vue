<template>
  <div class="card">
    <div class="card-header">
      <div class="card-title">{{item.item_name}}</div>
    </div>
    <img :src="item.item_photo" class="card-img-top">
    <div class="card-footer">
      <router-link class="btn btn-success" :to="{ name: 'detail', params: { id: item.item_id }}">Detail</router-link>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    props:{
      item: Object
    },
  }
</script>

<style type="text/css">
  
</style>