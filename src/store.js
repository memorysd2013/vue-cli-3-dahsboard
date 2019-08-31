import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
    accInfo:{},
    status:false
	},
	mutations:{ // fetch 完成才commit mutations
		setAccInfo(state,accInfo){
      state.accInfo=accInfo;
      status=true;
		},
		resetAcc(state,acc){
			//let acc=JSON.parse(localStorage.getItem('storageAcc'));
			state.accInfo=acc;
		}
	},
});

export default store;