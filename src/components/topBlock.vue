<template>
	<div class="header">
		<h1 class="title">{{title}}</h1>
		<div class="sayHi">
			<span>Have a nice day, {{accInfo.firstName}}!</span>
			<div class="bio">
				<img :src="accInfo.img">
			</div>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex';

//const acc=JSON.parse(this.localStorge.getItem('userAcc'));

export default {
	props:['title'],
	data(){
		return{
		}
	},
	computed:{
		...mapState(['accInfo']),
	},
	created(){
		if(this.$store.state.accInfo={}){
				let foo=JSON.parse(localStorage.getItem('storageAcc'));
				this.$store.commit('resetAcc',foo)
				console.log('顯示foo',foo);
			}else{
				return accInfo;
			}
	}
  
	
}
</script>

<style scoped>

.header{
	position:fixed;
	top:0;
	left:0;
	background-color: rgb(29,30,46);
	height:60px;
	width:100%;
	z-index:10;
}
.title,.sayHi{
	line-height:60px;
	font-weight:200;
	padding:0 20px;
	color:white;
}
.title{
	display:inline-block;
	font-size:16px;	
}
.sayHi{
	float:right;
	display: flex;
	align-items: center;
}
img{
	transform: scale(2);
	height: 100%;
	width: 100%;
	
}
.bio{
	display: inline-block;
	border-radius: 30px;
	height: 35px;
	width: 35px;
	overflow: hidden;
	margin: 0 20px;
}

</style>