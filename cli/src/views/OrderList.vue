<template>
  <div class="container">
    <div class="col-md-12">
          <table class="table table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>No</th>
                <th>UserName</th>
                <th>VocherNo</th>
                <th>Total</th>
                <th>Action</th>
                
              </tr>
            </thead>
            <tbody>

              <tr v-for="(order,index) in orders" :key="index" :order="order">
                <td>{{++index}}</td>
                <td>{{order.order_user.user_name}}</td>
                <td>{{order.order_voucherno}}</td>
                <td>{{order.order_total}}</td>
                <td><router-link class="btn btn-primary" :to="{name: 'order-show', params: { id: order.order_id }}">Detail</router-link></td>
                
              </tr>
            </tbody>
          </table>

          <div class="form-group">
            <textarea class="form-control" placeholder="Your Message Here!" v-model="notes"></textarea>
          </div>
        </div>
  </div>
</template>
<script type="text/javascript">
  import ItemService from '@/services/ItemService.js'

  export default{
  
  data(){
     return{
    orders:null
  }
},
  created(){
      ItemService.getOrders()
        .then(response => {
          this.orders = response.data.orders
        })
        .catch(error => {
          console.log('There was an error:',error.response)
        })
    }
  }
</script>

<style type="text/css">
  
</style>