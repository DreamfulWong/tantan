<template>
	<div class="city-box">
		<div class="header">
			<span>城市选择</span>
		</div>
		<!--<div class="searchCity">
			<div class="search">
				<input type="text" v-model="keyword" placeholder="输入城市名" />
			</div>
			<div class="search-content" v-show="keyword" ref='search'>
				<ul>
					<li class="search-item" v-for="item of list">{{item.name}}</li>
					<li class="search-item" v-show="">没有匹配的内容</li>
				</ul>
			</div>
		</div>-->
		<div class="list" ref='listWrapper'>
			<div>
				<div class="current-city">
					<span class="title">当前城市</span>
					<div>
						<div @click="cityClick(userCityName)">{{userCityName}}</div>
					</div>
				</div>
				<div class="hot-city">
					<div class="title">热门城市</div>
					<div class="btn-list">
						<div class="btn-wrapper" v-for="item of hotCities" :key='item.id' @click="cityClick(item.name)">
							<div class="btn">{{item.name}}</div>
						</div>
					</div>
				</div>

				<div class="initial" v-for="(item,index) of cities" :key='index' :ref='index'>
					<div class="title">{{index}}</div>
					<div v-for="city in item" :key='city.id' @click="cityClick(city.name)">
						<div>{{city.name}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				userCityName: this.$store.state.userCityName,
				hotCities: this.$store.state.cityJson.hotCities,
				cities: this.$store.state.cityJson.cities,
			}
		},
		methods: {
			cityClick(name) {
				this.$store.state.userCityName = name
				this.$router.push({
					path: '/register'
				});
			},
			_initScroll() {
				if(!this.slide) {
					this.slide = new BScroll(this.$refs.listWrapper, {
						click: true,
						probeType: 3
					})
					console.log('1')
				} else {
					this.slide.refresh()
				}
			}
		},
		created() {
			this.$nextTick(() => {
				this._initScroll()
			})
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.city-box {
		position: fixed;
		width: 100%;
		height: 100%;
		.header {
			height: 50px;
			line-height: 50px;
			background-color: red;
			overflow: hidden;
			color: white;
			font-size: 20px;
			text-align: center;
			position: relative;
		}
		.list {
			position: absolute;
			top: 50px;
			bottom: 0px;
			left: 0;
			right: 0;
			overflow: hidden;
			>div {
				.current-city {
					.title {
						height: 30px;
						line-height: 30px;
						font-size: 13px;
						display: block;
						padding-left: 10px;
						background-color: #f5f5f5;
					}
					>div {
						background-color: white;
						height: 50px;
						line-height: 50px;
						>div {
							height: 20px;
							line-height: 20px;
							font-size: 16px;
							margin-left: 10px;
							padding: 5px 25px;
							border-radius: 5px;
							display: inline-block;
							background-color: #D3D3D3;
							border: 1px red solid;
						}
					}
				}
				.hot-city{
					.title{
						height: 30px;
						line-height: 30px;
						font-size: 13px;
						display: block;
						padding-left: 10px;
						background-color: #f5f5f5;
					}
					.btn-list{
						overflow: hidden;
						width: 100%;
						.btn-wrapper{
							float: left;
							text-align: center;
							width: 33.33%;
							
							>div{
								margin:5px;
								border-radius: 5px;
								border: 1px solid red;
							}
						}
					}
				}
				.initial{
					position: relative;
					.title{
						line-height: 35px;
						height: 35px;
						padding-left: 10px;
						font-size: 20px;
						background-color: lightgray;
					}
					>div{
						border-bottom: 1px solid lightgray;
						background-color: white;
						line-height: 40px;
						height: 40px;
						font-size: 15px;
						padding-left: 10px;
					}
				}
			}
		}
	}
</style>