<template>
  <div class="wrap">

      <form @submit.prevent="login">
        <i class="fab fa-vuejs"></i>
        <h2>VUE TEST DASHBOARD</h2>
        <h3>LOGIN</h3>
       
        <input type="text" v-model="userName" placeholder="User Name or E-mail" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <button type="submit">login</button>
        <div class="err">
       <p v-if="this.loginState">Wrong User Name / Password!</p>
      </div>
      </form>
      
  </div>
</template>
<script>
import { setTimeout } from 'timers';
  export default {
    data () {
      return {
        userName: '',
        password: '',
        userInfo:{},
        userAcc:{},
        loginState:false,
      }
    },
    watch:{
      userName(newV,oldV){
        var arr=this.userInfo; //所有帳戶
        for(var i=0;i<arr.length;i++){ 
          if(newV===arr[i].username){ //如果帳號符合其中一個帳戶
            this.userAcc=arr[i]; //把該帳戶存到 userAcc
          }
        }
        this.loginState=false;
      },
    },
    methods: {
      login(){ //按鍵觸發的 此時已經watch到目標帳戶
        if( this.userName === this.userAcc.username && this.password === this.userAcc.password ){
          localStorage.setItem('token', 'ImLogin');

          localStorage.setItem('storageAcc',JSON.stringify(this.userAcc));
          //let acc=JSON.parse(localStorage.getItem('storageAcc'));
          //console.log('這是存到localStorage的資料',acc);

          console.log('準備傳送userAcc資料',this.userAcc);
          this.$store.commit('setAccInfo',this.userAcc);
          this.$router.push('/dashboard');
          
          this.userName='';
          this.password='';
        } else{
          this.loginState=true;
        }      
      }
    },
    created() {
      fetch('/accInfo.json')
      .then(res => {
        //console.log('res',res)
        return res.json()
      })
      .then(data => {
        //console.log('帳戶data',data);
        return this.userInfo=data;
        }).catch(err=>{
          console.log('錯誤',err)
        })
    },
    
  }
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
.wrap{
  font-family:'poppin';
  background-color: rgb(29,30,46);  
  background: radial-gradient(ellipse,rgba(29,30,46,.9),black);
  height:100vh;
  width:100%;
  position:relative;
}
.fab{
  font-size:120px;
  letter-spacing:5px;
  display:inline;
  margin:-5px;
  text-align:center;
}
h2{
  font-weight:lighter;
  font-size:18px;
  font-family:'poppin';
}
h3{
  margin:-10px;
}
h2,h3{
  text-align:center;
}
form{
  color:white;
  top:0;
  left:0;
  right:0;
  bottom:30px;
  margin: auto;
  position:absolute;
  height:380px;
  width:250px;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  
}

input{
  font-weight:lighter;
  color:white;
	border-radius:20px;
  box-sizing:border-box;
	background-color:rgb(60,70,90);
	padding:2px 10px 2px 10px;
  font-size:16px;
	outline:none;
	border:1px rgba(0,0,0,.5) solid;
	width:100%;
}
button{
  font-weight:lighter;
  color:white;
  background:rgb(39,41,61);
  box-sizing:border-box;
  background-color: rgb(64,183,130);
	border:1px rgba(0,0,0,.5) solid;
	padding:2px 10px 2px 30px;
	border-radius:20px;
  width:100%;
  font-size:14px;
  outline:none;
}
.err{
  height:30px;
}
p{
  font-weight:lighter; 
  color:red;
  text-align:center;
}
</style>