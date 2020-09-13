<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-12">
        <h2>Get All Items</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3" v-for="(item,index) in items" :key="index">
        <ItemCard :item="item"></ItemCard>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import ItemCard from '@/components/ItemCard.vue'
  import ItemService from '@/services/ItemService.js'

  export default{
    components:{
      ItemCard
    },
    data(){
      return{
        items : []
      }
    },
    created(){
      ItemService.getItems()
        .then(response => {
          this.items = response.data.items
        })
        .catch(error => {
          console.log('There was an error:',error.response)
        })
    }
  }
</script>

<style type="text/css">
  
</style>