<template>
	<div class="person-box">
		<img class="person-box-bg" :src="this.$store.state.userphoto" />
		<div class="head">
			<div class="headphoto">
				<input type="file" ref="inputphoto" @click="uploadTime"/>
				<img :src="this.$store.state.userphoto" />
			</div>
			<span class="username">{{this.$store.state.username}}</span>
			<div class="head-student">
				<span>点击认证学生身份</span>
			</div>
		</div>
		<!--<input  type="text" :placeholder=this.$store.state.username />-->

		<ul class="personmenu">
			<router-link to="/">
				<li>
					<img src="../../assets/img/iconphoto.png" />
					<span>探探</span>
				</li>
			</router-link>
			<router-link to="/persons">
				<li>
					<img src="../../assets/img/iconcrown.png" />
					<span>激活特权</span>
				</li>
			</router-link>
			<router-link to="/persons">
				<li>
					<img src="../../assets/img/iconmail.png" />
					<span>匿名暗恋表白</span>
				</li>
			</router-link>
			<router-link to="/persons">
				<li>
					<img src="../../assets/img/iconsetting.png" />
					<span>设置</span>
				</li>
			</router-link>
			<router-link to="/persons">
				<li>
					<img src="../../assets/img/iconquestion.png" />
					<span>新手引导</span>
				</li>
			</router-link>
			<router-link to="/persons">
				<li>
					<img src="../../assets/img/iconshare.png" />
					<span>推介给好友</span>
				</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Person',
		methods: {
			uploadTime(){
				setTimeout(this.upload,3000)
			},
			upload() {
				//		上传头像
				var header = new FileReader()
				header.readAsDataURL(this.$refs.inputphoto.files[0])
				header.onloadend = ((e) => {
					const img = e.target.result
					this.$store.state.userphoto = img
				})
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	$black: rgba(50, 50, 50, 0.9);
	.person-box {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: $black;
		z-index: -1;
		.person-box-bg {
			position: fixed;
			width: 100%;
			height: 100%;
			z-index: -1;
			opacity: 0.1;
		}
		.head {
			position: relative;
			width: 100%;
			height: 220px;
		}
		.headphoto {
			position: relative;
			width: 100px;
			height: 100px;
			top: 20px;
			margin: auto;
			border: 1px solid rgba(255, 255, 255, 0.5);
			overflow: hidden;
			border-radius: 50px;
			img {
				top:0px;
				width: 100px;
				height: 100px;
				position: absolute;
				z-index: -1;
			}
			input{
				border-radius:100% ;
				opacity: 0;
				width: 100px;
				height: 100px;
			}
		}
			.head-student{
				position: relative;
				width: 230px;
				height: 40px;
				top: 35px;
				margin: auto;
				border-radius:40px ;
				background-color: rgb(46,174,201);
				>span{
					display: inline-block;
					font-size: 18px;
					color: white;
					margin:8px 40px;
				}
		}
		.username {
			display: inline-block;
			position: relative;
			color: white;
			font-size: 30px;
			margin: auto;
			left: 50%;
			top: 30px;
			transform: translate(-50%, 0);
			text-align: center;
		}
		.personmenu {
			position: relative;
			margin: auto;
			width: 100%;
			height: 440px;
		}
		.personmenu li {
			margin-top: 35px;
			height: 30px;
			line-height: 30px;
			width: 100%;
			list-style: none;
			color: rgb(240, 240, 240);
			>img {
				margin: 0px 40px;
				width: 30px;
			}
			>span {
				display: inline-block;
				font-size: 25px;
			}
		}
		.personmenu a {
			position: relative;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			text-decoration: none;
			color: rgb(0, 0, 0);
			width: 200px;
		}
		.personmenu li:active {
			color: red;
		}
	}
</style>