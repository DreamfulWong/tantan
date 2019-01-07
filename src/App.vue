<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
	import huadong from './components/huadong'

export default {
  name: 'App',
  data(){
  	return{
  		pages:''
//		num:0,
//		i:'',
//		girl:''
  	}
  },
  components:{
  	
  },
  mounted(){
//	console.log(this.item)
  },

}

</script>

<style>
	*{
		margin: 0;
		padding: 0;
		-moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
	}
#app {
	height: 100%;
	margin: 0 auto;
	width: 355px;
	position:fixed;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
