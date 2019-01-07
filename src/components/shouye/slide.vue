<template>
	<div class="sliderBorder">
		<ul class="stack">
			<transition-group name='stack-item' tag='p'>
			<li class="stack-item" :class="" v-for="(itemImg,indexImg) in girlsImg" v-show="indexImg==0" :key="itemImg.id" @click="girlsImgsShowFun" ref='huadong'>
				<div v-show="girlsImgsShow==false">
					<div class="imgnum">
						<img src="../../assets/img/iconpic.png" />
						<span>{{itemImg.imgs.length}}</span>
					</div>
					<img :src="itemImg.imgs[0]" width="350" height="350">
					<div class="stack-item-index-info">
						<span class="user-name">{{itemImg.name}}</span>
						<div class="user-age">
							<img src="../../assets/img/iconnv.png">
							<span>{{itemImg.age}}</span>
						</div>
						<div class="user-constellation">
							{{itemImg.constellation}}
						</div>
						<div class="user-other">
							{{itemImg.distance}}
						</div>
					</div>
				</div>
			</li>
			</transition-group>
			<div class="person" ref="page" v-show="girlsImgsShow==true">
				<div>
					<div class="person-page" v-for="(itemImg,indexImg) in girlsImg" v-show="indexImg==0" :key="itemImg.id" @click="girlsImgsShowFun">
						<div class="swiper-container">
							<div class="person-imgs swiper-wrapper">
								<div class="swiper-slide" v-for="(img,index) in itemImg.imgs" :key="index">
									<img :src="img" width="100%" height="375" />
								</div>
							</div>
							<div class="swiper-pagination"></div>
						</div>
						<div class="person-info">
							<div>
								<div class="person-info-header">
									<span class="user-name">{{itemImg.name}}</span>
									<div class="user-age">
										<img src="../../assets/img/iconnv.png">
										<span>{{itemImg.age}}</span>
									</div>
									<div class="user-constellation">
										{{itemImg.constellation}}
									</div>
									<div class="user-other">
										{{itemImg.distance}},{{itemImg.onlineTime}}
									</div>
								</div>
								<div class="person-info-idiograph" v-if="itemImg.idiograph">
									<h3>个人签名</h3>
									<div>
										<img src="../../assets/img/idiograph.png" />
										<span>{{itemImg.idiograph}}</span>
									</div>
								</div>
								<div class="person-info-hobby" v-if="itemImg.hobby">
									<h3>兴趣爱好</h3>
									<div>
										<img src="../../assets/img/idiograph.png" />
										<span v-for="(hobbyitem,index) in itemImg.hobby">{{hobbyitem}}</span>
									</div>
								</div>
								<div class="person-info-label" v-if="itemImg.label">
									<h3>我的标签</h3>
									<div>
										<img src="../../assets/img/label.png" />
										<span v-for="(labelitem,index) in itemImg.label">{{labelitem}}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<span v-show="girlsImg==''">没有更多了</span>
		</ul>
		<br style="clear: both;" />
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	import Swiper from 'swiper'
	export default {
		name: 'slide',
		props: {
			pages: {
				type: Array,
				default: () => ([])
			}
		},
		data() {
			return {
				girl: this.$store.state.girlJson,
				girlsImg: this.$store.state.girlsImg,
				girlsImgsShow: this.$store.state.girlsImgsShow,
			}
		},
		methods: {
			//滑动页面
			_initScroll() {
				if(!this.slide) {
					this.slide = new BScroll(this.$refs.page, {
						click: true,
						probeType: 3
					})
				} else {
					this.slide.refresh()
				}
			},
			//控制图片组的显示
			girlsImgsShowFun() {
				if(this.girlsImgsShow == false) {
					this.girlsImgsShow = this.$store.state.girlsImgsShow = true
				} else if(this.girlsImgsShow == true) {
					this.girlsImgsShow = this.$store.state.girlsImgsShow = false
				}
			},
			// 执行下一张函数
			next(right) {
//				this.$refs.huadong[0].style.transform = "translate(0px,0px)"
//				this.$refs.huadong[0].style.animationDuration = '3s'
//				this.$refs.huadong[0].style.animationTimingFunction = 'ease'
//				
//				setTimeout(()=>{
//					this.$refs.huadong[0].style.transform = "translate(300px,0px)"
//				},50)
				if(right){
					this.$refs.huadong[1].style = "transform:translate(-375px,0px)"
					this.$refs.huadong[0].style = "transform:translate(375px,0px);transition:0.5s ease-in;"
				}else{
					this.$refs.huadong[1].style = "transform:translate(375px,0px)"
					this.$refs.huadong[0].style = "transform:translate(-375px,0px);transition:0.5s ease-in;"
				}
				setTimeout(this.clearpic,500)
				this.girlsImgsShow = false
			},
			clearpic() {
				this.$store.state.girlsImg.splice(0, 1)
				this.$refs.huadong[1].style = "translate(0px,0px);transition:0.5s ease-in;"
				},
			// 滑动下一张并向父组件传值
			// indexvalue(){
			// 	this.indexImg++
			// 	this.$emit('childvalue',this.indexImg)
			// },
			rightpic() {
				this.$store.state.loveusers.push(this.girlsImg[0].id)
				const loveusers = this.$store.state.loveusers
				const girl = this.girl
				this.lovearr(loveusers, girl, this.addId)
			},
			lovearr(loveusers, girl, addId) {
				for(var i = 0; i < loveusers.length; i++) {
					var loveIdInGirlIndex = (girl.findIndex(function(value) {
						return value.id == loveusers[i];
					}))
				}
				console.log(loveIdInGirlIndex)
				addId(loveIdInGirlIndex)
			},
			addId(loveIdInGirlIndex) {
				this.$store.state.loveIdInGirlIndex.unshift(loveIdInGirlIndex)
				console.log(this.$store.state.loveIdInGirlIndex)
			},
		},
		mounted() {
			new Swiper('.swiper-container', {
				loop: false,
				observer: true,
				observeParents: true,
				pagination: {
					el: '.swiper-pagination'
				}
			})
		},
		created: function() {
			this.$nextTick(() => {
				this._initScroll()
			})
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.sliderBorder {
		position: relative;
		height: 475px;
		width: 375px;
		/*display: block;*/
		.stack {
			width: 355px;
			height: 450px;
			position: relative;
			margin: 12px auto;
			padding: 0;
			.stack-item {
				height: 450px;
				width: 350px;
				border-radius: 20px;
				position: absolute;
				list-style: none;
				>div>img {
					border-radius: 20px 20px 0px 0px;
					height: 350px;
					width: 350px;
					display: block;
					pointer-events: none;
				}
				.imgnum {
					position: absolute;
					margin-top: 10px;
					margin-left: 10px;
					border-radius: 8px;
					background-color: rgb(133, 134, 128);
					>img {
						margin-left: 8px;
						margin-top: 3px;
						width: 20px;
						background-color: white;
					}
					>span {
						color: white;
						margin-left: 3px;
						margin-right: 5px;
						display: inline-block;
					}
				}
				.stack-item-index-info {
					position: relative;
					height: 100px;
					border-radius: 0px 0px 20px 20px;
					border: 1px solid gray;
					border-top: none;
					.user-name {
						position: relative;
						margin-left: 15px;
						font-size: 25px;
						display: block;
						top: 5px;
					}
					.user-age {
						margin-top: 5px;
						margin-left: 15px;
						background-color: hotpink;
						display: inline-block;
						border-radius: 5px;
						>img {
							margin-top: 1px;
							margin-left: 10px;
							width: 15px;
							height: 15px;
						}
						>span {
							margin-left: 5px;
							margin-right: 10px;
							text-align: center;
							display: inline-block;
							color: rgba(255, 255, 255, 0.8);
						}
					}
					.user-constellation {
						display: inline-block;
						margin-left: 5px;
						text-align: center;
						width: 55px;
						border-radius: 5px;
						background-color: rgb(213, 101, 177);
						font-size: 16px;
					}
					.user-distance {
						display: block;
						background-color: rgb(213, 101, 177);
						font-size: 16px;
					}
					.user-other {
						margin-top: 10px;
						margin-left: 15px;
						color: darkgray;
					}
				}
			}
			/*.stack-item-enter-active {
				animation: all 1s linear;
			}
			.stack-item-enter{
				margin-left: -375px;
			}*/
			.person {
				position: fixed;
				left: 0px;
				top: 0px;
				z-index: 1;
				width: 100%;
				overflow: hidden;
				height: 540px;
				overflow: hidden;
				.person-page {
					position: relative;
					top: 0px;
					left: 0px;
					width: 100%;
					height: auto;
					background-color: white;
					.swiper-container {
						position: relative;
						margin: 0px auto;
					}
					.person-info {
						position: relative;
						width: 100%;
						>ul {
							height: 500px;
						}
						.person-info-header {
							position: relative;
							background-color: white;
							margin-top: 20px;
							height: 110px;
							border-bottom: 2px rgb(233, 233, 233) solid;
							.user-name {
								margin-left: 15px;
								font-size: 25px;
								display: block;
							}
							.user-age {
								margin-top: 5px;
								margin-left: 15px;
								background-color: hotpink;
								display: inline-block;
								border-radius: 5px;
								>img {
									margin-top: 1px;
									margin-left: 10px;
									width: 15px;
									height: 15px;
								}
								>span {
									margin-left: 5px;
									margin-right: 10px;
									text-align: center;
									display: inline-block;
									color: rgba(255, 255, 255, 0.8);
								}
							}
							.user-constellation {
								display: inline-block;
								margin-left: 5px;
								text-align: center;
								width: 55px;
								border-radius: 5px;
								background-color: rgb(213, 101, 177);
								font-size: 16px;
							}
							.user-other {
								margin-top: 10px;
								margin-left: 15px;
								color: darkgray;
							}
						}
						.person-info-idiograph {
							background-color: white;
							height: 150px;
							position: relative;
							border-bottom: 2px rgb(233, 233, 233) solid;
							>h3 {
								margin-left: 15px;
								margin-top: 20px;
								color: red;
							}
							>div {
								margin-top: 20px;
								width: 100%;
								>span {
									font-size: 20px;
								}
							}
						}
						.person-info-hobby {
							height: 150px;
							background-color: white;
							border-bottom: 2px rgb(233, 233, 233) solid;
							>h3 {
								margin-left: 15px;
								margin-top: 20px;
								color: red;
							}
							>div {
								margin-top: 10px;
								span {
									display: inline-block;
									font-size: 20px;
									height: 30px;
									text-align: center;
									padding: 2px 10px;
									margin: 5px 10px;
									border-radius: 5px;
									background-color: rgba(50, 205, 50, 0.5);
								}
							}
						}
						.person-info-label {
							

							height: 150px;
							background-color: white;
							border-bottom: 2px rgb(233, 233, 233) solid;
							>h3 {
								margin-left: 15px;
								margin-top: 20px;
								color: red;
							}
							>div {
								margin-top: 10px;
								span {
									display: inline-block;
									font-size: 20px;
									height: 30px;
									text-align: center;
									padding: 2px 10px;
									margin: 5px 10px;
									border-radius: 5px;
									background-color: rgba(65, 125, 225, 0.5);
								}
							}
						}
					}
				}
			}
		}
	}
</style>