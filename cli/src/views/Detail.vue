<template>
  <div class="row">
    <div class="col-md-6">
      <img :src="item.item_photo" class="img-fluid" style="width: 300px;height: 400px">
    </div>
    <div class="col-md-6">
      <div class="card">
        <h3>Item Detail</h3>
        <hr>
    <div class="card-body">
    <p>Name:{{item.item_name}}</p>
    <p>Price:{{item.item_price}}</p>
    
    <p>Discount:{{item.item_discount}}</p>
  </div>
</div>
</div>
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
 p{
  margin-top: 5px;
 } 
h3{
  font-style: italic;
  font-weight: bold;
  color:#d291bc;
}


</style>