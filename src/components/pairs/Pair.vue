<template>
	<div class="pairbox">
		<img class="pairbox-bg" :src="this.$store.state.userphoto" />
		<div class="header">
			<router-link to="/"><span class="iconfont icon-fanhui"></span></router-link>

			<span>所有配对 {{loveIdInGirlIndex.length}}</span>
			<div class="friendcicle">
				<img class="iconfriendcicle" src="../../assets/img/iconfriend.png" />
				<i>朋友圈</i>
				<img class="friendciclegirl" src="../../assets/img/icontalk.png" />
			</div>
		</div>
		<div class="talk-title">
			<span>聊天</span>

		</div>
		<div class="container" ref="list">
			<ul>
				<li class="loveuser">
					<div class="loveuserimg">
						<img src="../../assets/img/icontalk.png" style="width: 100px;height: 100px;">
					</div>
					<div class="loveuser-talk">
						<span class="talk-name">查看谁喜欢我</span>
						<span class="talk-content">TA喜欢了我？</span>
					</div>
				</li>
				<li v-for="(item,index) in loveIdInGirlIndex" class="loveuser" @click="talkindex(item)">
					<router-link to="/talkpage">
						<div class="loveuserimg">
							<img :src="girls[item].imgs[0]" style="width: 100px;height: 100px;">
						</div>
						<div class="loveuser-talk">
							<span class="talk-name">{{girls[item].name}}</span>
							<span class="talk-content">{{girls[item].talk[0].send}}</span>
							<span class="talk-content" v-show="girls[item].talk[0].send==''">匹配成功</span>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'

	export default {
		name: 'Pair',
		data() {
			return {
				girls: this.$store.state.girlJson,
				Pair: null
			}
		},
		methods: {
			_initScroll() {
				if(!this.Pair) {
					this.Pair = new BScroll(this.$refs.list, {
						click: true,
						probeType: 3
					})
				} else {
					this.pair.refresh()
				}
			},
			talkindex(id) {
				this.$store.state.talkIndex = id
			}
		},
		created: function() {
			//					const loveusers = this.$store.state.loveusers
			//					const girls = this.girls
			//					this.lovearr(loveusers, girls, this.addId)
			this.$nextTick(() => {
				this._initScroll()
			})
						this.loveIdInGirlIndex = this.$store.getters.loveIdInGirlIndex
//						this.loveIdInGirlIndex.reverse()
		},
//		computed: {
//			loveIdInGirlIndex() {
//				console.log(this.$store.state.loveIdInGirlIndex)
//				console.log(this.$store.getters.loveIdInGirlIndex)
//				return this.$store.getters.loveIdInGirlIndex.reverse()
//			}
//		}
	}
</script>

<style lang="scss" scoped="scoped">
	.pairbox {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.9);
		.pairbox-bg {
			position: fixed;
			width: 100%;
			height: 100%;
			z-index: -1;
			opacity: 0.1;
		}
	}
	
	.header>span {
		position: absolute;
		color: white;
		font-size: 25px;
		margin: 15px 30px;
	}
	
	.icon-fanhui {
		position: relative;
		display: inline-block;
		font-size: 35px;
		color: white;
		width: 20px;
		margin: 10px;
	}
	
	.friendcicle {
		position: relative;
		width: 320px;
		height: 50px;
		border-radius: 10px;
		background-color: rgba(80, 80, 80, 0.6);
		margin: 5px auto;
		>i {
			position: absolute;
			font-size: 30px;
			left: 80px;
			top: 3px;
			color: white;
		}
		.iconfriendcicle {
			position: absolute;
			width: 30px;
			margin-left: 20px;
			top: 10px;
		}
		.friendciclegirl {
			display: inline-block;
			width: 40px;
			height: 40px;
			border-radius: 20px;
			margin-left: 250px;
			margin-top: 5px;
		}
	}
	
	.talk-title {
		position: relative;
		width: 100%;
		border-bottom: groove 5px red;
		>span {
			color: white;
			line-height: 50px;
			text-align: center;
			display: block;
			font-size: 25px;
			position: relative;
			margin: 0 auto;
		}
	}
	
	.container {
		position: absolute;
		height: 470px;
		width: 100%;
		margin-top: 10px;
		overflow: hidden;
		.loveuser {
			position: relative;
			height: 60px;
			list-style: none;
			margin-top: 10px;
			.loveuserimg {
				position: relative;
				display: block;
				margin: 5px 10px;
				width: 50px;
				height: 50px;
				border-radius: 50px;
				overflow: hidden;
				>img {
					width: 50px !important;
					height: 50px !important;
				}
			}
			.loveuser-talk {
				position: absolute;
				height: 100%;
				width: 100%;
				left: 80px;
				top: 0px;
				border-bottom: 1px solid rgba(120, 120, 120, 0.1);
				.talk-name {
					display: block;
					color: white;
					font-size: 20px;
				}
				.talk-content {
					display: block;
					font-size: 15px;
					color: rgb(120, 120, 120);
					margin-top: 10px;
				}
			}
		}
	}
</style>