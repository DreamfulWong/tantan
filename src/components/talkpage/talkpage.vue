<template>
	<div class="talkpage-box">
		<div class="header">
			<router-link to="/pairs"><img class="header-back" src="../../assets/img/iconback.png" /></router-link>
			<img :src="this.$store.state.girlJson[this.$store.state.talkIndex].imgs[0]" />
			<span class="talk-name">{{othername}}</span>
		</div>
		<img class="container-bg" :src="this.$store.state.girlJson[this.$store.state.talkIndex].imgs[0]" />

		<div class="container" ref="page" @click="normal">
			<div>
				<div class="msg other">
					<router-link to='/otherpage'>
						<img :src="otherphoto" width="40" height="40" class="otherphoto" />
					</router-link>
					<div class="bubble">
						<router-link to='/otherpage'><img :src="otherphoto" width="220" height="230" /></router-link>
						<div>
							<span class="hello-name">
							{{othername}}、{{distance}}
						</span>
							<span class="hello-text">我是{{constellation}},很高兴认识你</span>
						</div>
					</div>
				</div>
				<div v-for="(item,index) in textlist" :key="index" class="msg" :class="{other:!item.self}">
					<!--<div class="tail"></div>-->
					<router-link to='/otherpage'>
						<img :src="otherphoto" v-if="item.self===false" width="40" height="40" class="otherphoto" />
					</router-link>
					<div class="bubble">{{item.text}}</div>
					<router-link to='/persons'>
						<img :src="userphoto" v-if="item.self===true" class="userphoto" width="40" height="40" />
					</router-link>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="footer-main">
				<img v-if="funIconShow" src="../../assets/img/iconother.png" class="fun" @click="funShow" />
				<img v-else src="../../assets/img/iconinput.png" class="fun-input" @click="funShow" />

				<img v-if="faceIconShow" src="../../assets/img/iconface.png" class="face" @click="faceShow" />
				<img v-else src="../../assets/img/iconinput.png" class="face-input" @click="faceShow" />

				<input class="input-text" type="text" v-if="inputBoxIsShow" v-model="inputtext" placeholder="     输入聊天内容..." />
				<input v-else class="input-text" type="button" value="按住说话" />

				<img v-if="!inputtext&&inputBoxIsShow" src="../../assets/img/iconvioce.png" class="vioce" @click="inputBoxShow" />
				<button v-else-if="inputtext&&inputBoxIsShow" @click="sendtext" class="send-text">发送</button>
				<img v-else-if="!inputBoxIsShow" src="../../assets/img/iconinput.png" class="input" @click="inputBoxShow" />
			</div>
			<div class="footer-other">
				<div class="footer-other-fun" ref='fun'>
					<div class="classics">
						<img src="../../assets/img/classics.png" />
					</div>
					<div class="privacy">
						<img src="../../assets/img/privacy.png" />
					</div>
					<div class="file">
						<img src="../../assets/img/file.png" />
					</div>
					<div class="photo">
						<img src="../../assets/img/photo.png" />
					</div>
					<div class="video">
						<img src="../../assets/img/video.png" />
					</div>
					<div class="location">
						<img src="../../assets/img/location.png" />
					</div>
				</div>
				<div class="footer-other-face" ref='face'>
					<div>
						<img src="../../assets/img/iconface1.png" />
					</div>
					<div>
						<img src="../../assets/img/iconface2.png" />
					</div>
					<div>
						<img src="../../assets/img/iconface3.png" />
					</div>
					<div>
						<img src="../../assets/img/iconface4.png" />
					</div>
					<div>
						<img src="../../assets/img/iconface5.png" />
					</div>
					<div>
						<img src="../../assets/img/iconface6.png" />
					</div>
					<div>
						<img src="../../assets/img/iconface7.png" />
					</div>
					<div>
						<img src="../../assets/img/iconface8.png" />
					</div>
					<div>
						<img src="../../assets/img/iconface9.png" />
					</div>
					<div>
						<img src="../../assets/img/iconface10.png" />
					</div>
					<div>
						<img src="../../assets/img/iconface11.png" />
					</div>
					<div>
						<img src="../../assets/img/iconface12.png" />
					</div>
					<div>
						<img src="../../assets/img/iconface14.png" />
					</div>
					<div>
						<img src="../../assets/img/iconface14.png" />
					</div>
					<div>
						<img src="../../assets/img/iconface15.png" />
					</div>
					<div>
						<img src="../../assets/img/iconface16.png" />
					</div>
					<div>
						<img src="../../assets/img/iconface17.png" />
					</div>
					<div>
						<img src="../../assets/img/del.png" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'

	export default {
		name: 'talkpage',
		data() {
			return {
				funIconShow: true,
				faceIconShow: true,
				funIsShow: false,
				faceIsShow: false,
				inputBoxIsShow: true,
				userphoto: this.$store.state.userphoto,
				othername: this.$store.state.girlJson[this.$store.state.talkIndex].name,
				constellation: this.$store.state.girlJson[this.$store.state.talkIndex].constellation,
				distance: this.$store.state.girlJson[this.$store.state.talkIndex].distance,
				otherphoto: this.$store.state.girlJson[this.$store.state.talkIndex].imgs[0],
				inputtext: '',
				textlist: []
			}
		},
		methods: {
			_initScroll() {
				if(!this.talkpage) {
					this.talkpage = new BScroll(this.$refs.page, {
						click: true,
						probeType: 3,
						momentum: true,
						bounce: true
					})
				} else {
					this.talkpage.refresh()
				}
			},
			sendtext() {
				var str = this.inputtext
				if(!str) {
					return
				}
				this.textlist.push({
					text: str,
					self: true
				})
				this.inputtext = ''
				setTimeout(this.autoreply, 300)
				this._initScroll()
			},
			autoreply() {
				this.textlist.push({
					text: '自动回复:你好我现在有事不在,一会在于你联系!',
					self: false
				})
				this.$store.state.talkContent=this.textlist
			},
			//控制输入框显示
			inputBoxShow() {
				if(this.inputBoxIsShow) {
					this.inputBoxIsShow = false
				} else {
					this.inputBoxIsShow = true
				}
				this.normal()
			},
			//恢复正常聊天框
			normal() {
				this.funIconShow = true
				this.faceIconShow = true
				this.$refs.page.style.height = '83%'
				this.$refs.fun.style.display = 'none'
				this.$refs.face.style.display = 'none'
				this._initScroll()
			},
			//功能点击事件
			funShow() {
				if(this.funIconShow) {
					this.funIconShow = false
					this.faceIconShow = true
					this.inputBoxIsShow = true
					this.$refs.page.style.height = '46%'
					this.$refs.face.style.display = 'none'
					this.$refs.fun.style.display = 'block'
					this._initScroll()
				} else {
					this.normal()
				}

			},
			//表情点击事件
			faceShow() {
				if(this.faceIconShow) {
					this.faceIconShow = false
					this.funIconShow = true
					this.inputBoxIsShow = true
					this.$refs.page.style.height = '46%'
					this.$refs.fun.style.display = 'none'
					this.$refs.face.style.display = 'block'
					this._initScroll()
				} else {
					this.normal()
				}
			}
		},
		//		mounted: function() {
		//			this.$nextTick(() => {
		//				this._initScroll()
		//			})
		//		},
	}
</script>

<style lang="scss" scoped="scoped">
	.talkpage-box {
		position: fixed;
		min-width: 375px;
		width: 100%;
		height: 100%;
		.header {
			position: relative;
			height: 9%;
			width: 100%;
			background-color: white;
			border-bottom: 1px solid darkgray;
			>a {
				display: inline-block;
				.header-back {
					position: absolute;
					width: 8%;
					left: 4%;
					top: 25%;
				}
			}
			>img {
				margin-left: 16%;
				margin-top: 2%;
				border-radius: 100%;
				width: 12%;
				height: 75%;
			}
			.talk-name {
				display: inline-block;
				top: 15%;
				margin-left: 2%;
				color: rgb(243, 148, 119);
				font-size: 30px;
				position: absolute;
			}
		}
		.container-bg {
			position: fixed;
			width: 100%;
			height: 100%;
			z-index: -1;
			opacity: 0.6;
		}
		.container {
			height: 83%;
			/*height: auto;*/
			width: 100%;
			overflow: hidden;
			background-color: rgba(200, 200, 200, 0.6);
			>div {
				.msg {
					position: relative;
					width: 100%;
					line-height: 20px;
					padding: 10px 10px;
					box-sizing: border-box;
					text-align: right;
					.userphoto {
						border-radius: 100%;
						position: relative;
						display: inline-block;
						top: 12px;
						/*left: 80%;*/
					}
					.otherphoto {
						position: absolute;
						border-radius: 100%;
						display: inline-block;
					}
					.bubble {
						display: inline-block;
						margin-right: 4px;
						padding: 5px 4px 5px 5px;
						max-width: 250px;
						min-height: 19px;
						min-width: 20px;
						margin-left: 50px;
						border-radius: 5px;
						font-size: 18px;
						word-wrap: break-word;
						background: rgb(255, 255, 255);
						.hello-name {
							margin: 5px 10px;
							font-size: 20px;
							display: block;
						}
						.hello-text {
							display: inline-block;
							margin: 0px 0px 10px 10px;
							font-size: 20px;
							max-width: 200px;
							color: rgb(190, 190, 190);
						}
					}
				}
				.other {
					text-align: left;
				}
			}
		}
		.footer {
			position: relative;
			bottom: 0px;
			height: 300px;
			.footer-main {
				width: 100%;
				height: 50px;
				background-color: white;
				border-top: 1px solid gainsboro;
				position: relative;
				.fun {
					position: absolute;
					margin-top: 2%;
					height: 65%;
					margin-left: 2%;
					width: 9%;
					display: inline-block;
				}
				.fun-input {
					position: absolute;
					margin-top: 2%;
					height: 65%;
					margin-left: 2%;
					width: 9%;
					display: inline-block;
				}
				.face {
					margin-top: 2%;
					margin-left: 14%;
					height: 66%;
					width: 10%;
					display: inline-block;
				}
				.face-input {
					margin-top: 2%;
					margin-left: 14%;
					height: 66%;
					width: 10%;
					display: inline-block;
				}
				.input-text {
					position: absolute;
					height: 66%;
					width: 53%;
					margin-left: 2%;
					margin-top: 2%;
					border: none;
					font-size: 20px;
				}
				.send-text {
					position: absolute;
					color: #FF4500;
					font-size: 15px;
					top: 16%;
					left: 82%;
					width: 15%;
					height: 66%;
				}
				.vioce {
					position: absolute;
					top: 16%;
					left: 85%;
					width: 10%;
					height: 66%;
				}
				.input {
					position: absolute;
					top: 16%;
					left: 85%;
					width: 10%;
					height: 66%;
				}
			}
			.footer-other {
				background-color: rgb(243, 243, 243);
				height: 250px;
				width: 100%;
				position: relative;
				.footer-other-fun {
					width: 100%;
					height: 100%;
					position: absolute;
					>div {
						margin: 0px;
						display: inline-block;
						/*border: 1px solid rgb(230,230,230);*/
						width: 32%;
						height: 50%;
						>img {
							height: 100%;
							width: 100%;
						}
					}
				}
				.footer-other-face {
					width: 100;
					height: 100%;
					position: absolute;
					background-color: rgb(206, 209, 214);
					>div {
						margin: 10px 1px;
						display: inline-block;
						>img {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
	}
</style>