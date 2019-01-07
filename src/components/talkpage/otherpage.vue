<template>
	<div class="otherpage-box">
		<div class="person" ref="page">
			<div>
				<div class="back">
					<router-link to='/talkpage'><span class="iconfont icon-fanhui"></span></router-link>
				</div>
				<div class="swiper-container">
					<div class="person-imgs swiper-wrapper">
						<div class="swiper-slide" v-for="(img,index) in girls[talkIndex].imgs" :key="index">
							<img :src="img" width="100%" height="375" />
						</div>
					</div>
					<div class="swiper-pagination"></div>
				</div>
				<div class="person-info">
					<div>
						<div class="person-info-header">
							<span class="user-name">{{girls[talkIndex].name}}</span>
							<div class="user-age">
								<img src="../../assets/img/iconnv.png">
								<span>{{girls[talkIndex].age}}</span>
							</div>
							<div class="user-constellation">
								{{girls[talkIndex].constellation}}
							</div>
							<div class="user-other">
								{{girls[talkIndex].distance}},{{girls[talkIndex].onlineTime}}
							</div>
						</div>
						<div class="person-info-idiograph" v-if="girls[talkIndex].idiograph">
							<h3>个人签名</h3>
							<div>
								<img src="../../assets/img/idiograph.png" />
								<span>{{girls[talkIndex].idiograph}}</span>
							</div>
						</div>
						<div class="person-info-hobby" v-if="girls[talkIndex].hobby">
							<h3>兴趣爱好</h3>
							<div>
								<img src="../../assets/img/idiograph.png" />
								<span v-for="(hobbyitem,index) in girls[talkIndex].hobby">{{hobbyitem}}</span>
							</div>
						</div>
						<div class="person-info-label" v-if="girls[talkIndex].label">
							<h3>我的标签</h3>
							<div>
								<img src="../../assets/img/label.png" />
								<span v-for="(labelitem,index) in girls[talkIndex].label">{{labelitem}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import BScroll from 'better-scroll'
	import Swiper from 'swiper'

	export default {
		name: 'otherpage',
		data() {
			return {
				talkIndex: this.$store.state.talkIndex,
				girls: this.$store.state.girlJson,
			}
		},
		methods: {
		//滑动页面
		_initScroll() {
				if(!this.slide) {
					this.slide = new BScroll(this.$refs.page, {
						click: true,
						probeType: 3,
						momentum: true,
						bounce: true
					})
					console.log('1')
				} else {
					this.slide.refresh()
				}
			}
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
			this.$nextTick(() => {
				this._initScroll()
			})
		},
	}
</script>

<style lang="scss" scoped="scoped">
	.back {
		position: absolute;
		z-index: 2;
		margin: 10px;
		>a {
			.icon-fanhui {
				position: relative;
				display: inline-block;
				font-size: 35px;
				color: white;
				width: 20px;
				margin: 10px;
			}
		}
	}
	
	.person {
		z-index: 0;
		position: fixed;
		left: 0px;
		top: 0px;
		width: 100%;
		overflow: hidden;
		height: 100%;
		overflow: hidden;
		.swiper-container {
			position: relative;
			margin: 0px auto;
		}
		.person-info {
			position: relative;
			width: 100%;
			/*height: 200px;*/
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
					>span {}
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
</style>