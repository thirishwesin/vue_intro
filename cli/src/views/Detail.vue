<template>
  <div>
    
    <h1>{{item.item_name}}</h1>
    <h1>{{item.item_price}}</h1>
    <h1>{{item.item_discount}}</h1>

  </div>
</template>

<script type="text/javascript">
  import ItemService from '@/services/ItemService.js'

  export default{
    data (){
      return {
        item: Object
      }
    },
    mounted(){
      this.getDetail();
    },
    methods:{
      getDetail(){
        let id = this.$route.params.id;
        ItemService.getItem(id)
            .then(res => {
              this.item = res.data.item
            })
            .catch(err => {
              console.log('There was an error:',err.response)
            })
      }
    }
  }
</script>

<style type="text/css">
  
</style>