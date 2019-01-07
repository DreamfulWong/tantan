<template>
	<div class="bigbox">
		<img class="bgpic" :src="this.$store.state.userphoto" />
		<div class="logo">
			<img src="../../assets/img/tantan.png" v-show="this.$store.state.userphoto==''" />
			<img :src="this.$store.state.userphoto" />
		</div>
		<h1>欢迎加入探探</h1>
		<div class="userinfo">
			<span class="name">请上传您的头像</span>
			<div class="userphoto">
				<button style="position: absolute;" class="file-photo-btn">上传图片</button>
				<input class="file-photo" type="file" ref="inputphoto" style="color: white; position: absolute;opacity: 0.1;">
			</div>
			<span class="name">请输入您的昵称</span>
			<input type="text" @click="upload" v-model='inputname' class="inputname" />
			<span class="name">请选择您的城市</span>
			<router-link to="/city" class="btn-city">
				<span>{{userCityName}}</span>
				<i></i>
			</router-link>
		</div>
		<button @click="login(inputname,girl)">进入</button>
	</div>
</template>

<script>
	export default {
		name: 'register',
		data() {
			return {
				girl: '',
				inputname: '',
				userCityName: this.$store.state.userCityName
			}
		},
		created() {
			this.axios.get('./api/girl')
				.then(res => {
					res = res.data
					if(res.errno === 0) {
						this.$nextTick(() => {
							this.$store.state.girlJson = res.data
							//							this.girl = this.$store.state.girlJson
						})
					}
				})
			this.axios.get('./api/city')
				.then(res => {
					res = res.data
					if(res.errno === 0) {
						this.$nextTick(() => {
							this.$store.state.cityJson = res.data.data
						})
					}
				})
		},
		methods: {
			login(inputname, girl) {
				//				this.$emit("close")
				this.$store.state.username = inputname
				if(this.$store.state.userCityName === '广州') {
					this.girl = this.$store.state.girlJson
					const copyGirl = []
					const girl = this.girl
					for(var i in girl) {
						copyGirl[i] = girl[i]
					}
					this.$store.state.girlsImg = copyGirl
				}
				console.log(this.$store.state.girlsImg)
				this.$router.push({
					path: '/'
				});
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
	.bigbox {
		width: 100%;
		height: 100%;
		position: fixed;
		/*background-color: rgba(222,222,222,0.9);*/
		.bgpic {
			position: fixed;
			z-index: 0;
			opacity: 0.1;
			width: 100%;
			height: 100%;
		}
		.logo {
			overflow: hidden;
			border-radius: 75px;
			position: relative;
			margin: auto;
			margin-top: 60px;
			width: 100px;
			width: 150px;
			height: 150px;
			>img {
				width: 150px;
				height: 150px;
			}
		}
		h1 {
			position: relative;
			width: 100%;
			text-align: center;
			/*display: inline-block;*/
		}
		.userinfo {
			position: relative;
			width: 200px;
			margin: 0px auto;
			.name {
				display: block;
				text-align: center;
				margin: 0 auto;
				margin-top: 20px;
				font-size: 22px;
				/*border-bottom: 1px solid rgba(120, 120, 120, 0.8);*/
			}
			.inputname {
				height: 25px;
				line-height: 25px;
				width: 180px;
				margin-top: 10px;
				margin-left: 50%;
				text-align: center;
				border: 1px solid red;
				border-left: none;
				border-top: none;
				border-right: none;
				font-size: 18px;
				background-color: rgba(255, 255, 255, 0.1);
				transform: translate(-50%, 0);
				:active {
					background-color: red;
				}
			}
			.userphoto {
				margin-top: 10px;
				width: 80px;
				height: 20px;
				margin-left: 50%;
				transform: translate(-50%, 0);
				.file-photo-btn {
					width: 100%;
					height: 30px;
				}
				.file-photo {
					width: 80px;
					position: absolute;
					opacity: 0;
				}
			}
			.btn-city {
				text-decoration: none;
				display: block;
				text-align: center;
				-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				>span {
					display: inline-block;
					padding: 5px 10px;
					color: red;
					background-color: lightgray;
				}
				>i {
					margin-right: 0.1rem;
					width: 0;
					height: 0;
					border: 4px solid #b0b0b0;
					border-left-color: transparent;
					border-right-color: transparent;
					border-bottom-color: transparent;
					display: inline-block;
					margin-left: 0.08rem;
					margin-top: 0.1rem;
				}
			}
		}
		>button {
			margin-top: 20px;
			margin-left: 50%;
			transform: translate(-50%, 0);
			width: 200px;
			height: 50px;
			border-radius: 50px;
			color: white;
			font-size: 20px;
			background-color: orangered;
		}
	}
	
	.inputname :active {
		border: none;
	}
</style>