<template>
	<!--<div v-if="registershow">
		<register @close='close'></register>
	</div>-->
	<div class="bigbox" v-else="false">
		<div class="header">
			<router-link to="/persons">
				<span class="iconfont icon-caidan"></span>
			</router-link>
			<router-link to="/pairs">
				<span class="iconfont icon-qipao"></span>
			</router-link>
			<!--{{indexImg}}-->
		</div>
		<slide ref="mychild"></slide>
		<div class="select">
			<div class="selectleft" >
				<div>
				<img src="../assets/img/cha.png" @click="nextpicleft"/>					
				</div>
			</div>
			<div class="selectright">
				<div>					
				<img src="../assets/img/xin.png"  @click="nextpicright"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import slide from './shouye/slide'
	import register from './shouye/register'

	export default {
		name: 'homepage',
		data() {
			return {
				indexImg: this.$store.state.indexImg,
//				registershow: this.$store.state.registershow
			}
		},
		components: {
			'slide': slide,
			register
		},
		methods: {
			close() {
//				this.registershow = this.$store.state.registershow = false
			},
			//			接收子组件传的值
			//			childvalue(indexImg){
				
			//				this.indexImg=indexImg
			//				console.log(indexImg)
			//			},
			//			执行子组件的函数
			nextpicleft() {
				const right=false
				this.$refs.mychild.next(right)
				this.$store.state.girlsImgsShow=false
			},
			nextpicright() {
				const right=true
				this.$refs.mychild.rightpic()
				this.$refs.mychild.next(right)
				this.$store.state.girlsImgsShow=false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bigbox {
		position: fixed;
		min-width: 375px;
		max-width: 375px;
	}
	
	.header {
		height: 60px;
		width: 100%;
		background-color: #FF0000;
	}
	.iconfont {
		font-size: 30px;
		color: white;
		margin-top: 15px;
	}
	
	.icon-caidan {
		position: absolute;
		left: 10px;
	}
	
	.icon-qipao {
		position: absolute;
		right: 10px;
	}
	
	.select {
		z-index: -1;
		width: 100%;
		height: 113px;
		position: relative;
	
	.selectleft {
		position: absolute;
		height: 100px;
		width: 48%;
		>div{
			border: 10px rgb(237,238,233) solid;
			border-radius: 60px;
			width: 80px;
			height: 80px;
			position: relative;
			margin: auto;
			transform-style: preserve-3d;
			>img{
				width: 50px;
				display: block;
				position: relative;
				margin: 50%;
				transform: translate(-50%,-50%);
			}
		}
	}
	
	.selectright {
		position: absolute;
		height: 100px;
		margin-left: 50%;
		width: 48%;
		>div{
			border: 10px rgb(237,238,233) solid;
			border-radius: 60px;
			width: 80px;
			height: 80px;
			position: relative;
			margin: auto;
			transform-style: preserve-3d;
			>img{
				width: 50px;
				display: block;
				position: relative;
				margin: 50%;
				transform: translate(-50%,-50%);
			}
		}

	}
}
</style>