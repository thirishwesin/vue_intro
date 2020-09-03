<template>
<div>
	<h1>{{title}}</h1>
	<p>{{msg}}</p>
	<p>This is testing for child component</p>
</div>
</template>

<script type="text/javascript">
	export default{
		props:{
		msg:null
		},
		data (){
			return {
				title:'Testing vue'
			}
		}
	}
</script>
<style type="text/css">
	
</style>