import Vue from 'vue'
import Vuex from 'vuex'
//import state from './state'

Vue.use(Vuex)

const state = {
	talkIndex:'',	//聊天页面的对象id
	girlJson:'',	//json数据，用于读取相应数据
	girlsImg:'',	//保存json的复制数据，用于主页循环删除
//	itemImgid:'',
	loveIdInGirlIndex:[],	//用户喜欢的人的id在数据的下标
	registershow:true,	//控制注册的显示
	girlsImgsShow:false,	//控制首页详细图片的显示
	username: '',	//用户的名字
	userphoto:'',	//用户的头像
	loveusers:[],	//用户喜欢的人的id
	cityJson:[],	//城市json数据
	userCityName:"广州",	//用户的城市名
	talkContent:[]	//聊天的内容
}
const getters = {
//	isusername(state,name){
//		return state.username=name
//	},
//	isshow(state,select){
//		return state.registershow=select
//	}
	loveIdInGirlIndex:(state) => [...state.loveIdInGirlIndex]
	
}

//const mutations={
////	show(state){
////		state.registershow=true
////	},
//	hide(state,select){
//		state.registershow=select
//	},
//	isusername(state,name){
//		state.username=name
//	}
//}

//const actions ={
//	hideregister(context){
//		context.commit('hide')
//	},
//	showregister(context){
//		context.commit('show')
//	},
//	getusername(username,inputname){
//		username.commit(isusername,inputusername)
//	}
//}

export default new Vuex.Store({
	state,
	getters,
//	mutations
})