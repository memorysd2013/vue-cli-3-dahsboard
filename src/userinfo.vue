<template>
  <div class="content">
    <Menu/>
    <topBlock :title="title"/>
    <div class="userinfo">

      <div class="edit-profile">
        <h1>Edit Profile</h1>

        <div class="input-area">
          <div class="row1">
            <label>Company(disabled)</label>
            <label>Username</label>
            <label>Email address</label>
            <input placeholder="Evan Code Inc." disabled />
            <input :value="accInfo.username"/>
            <input placeholder="mike@email.com"/>
          </div>
          <div class="row2">
            <label>First Name</label>
            <label>Last Name</label>
            <input :value="accInfo.firstName" />
            <input :value="accInfo.lastName"/>
          </div>
          <div class="row3">
            <label>Address</label>
            <input value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"/>
          </div>
          <div class="row4">
            <label>City</label>
            <label>Country</label>
            <label>Postal Code</label>
            <input :value="accInfo.city"/>
            <input :value="accInfo.country"/>
            <input placeholder="ZIP Code"/>
          </div>
          <label>About Me</label>
          <textarea>Lamborghini Mercy, Your chick she so thirsty,I'm in that two seat Lambo.
          </textarea>
        </div>

        <button class="btn">Save</button>

      </div>

      <div class="show-user">
        <div class="pic-box">
          <img class="user-pic" :src="accInfo.img" />
        </div>
        <h2>{{accInfo.firstName}} {{accInfo.lastName}}</h2>
        <h3>{{accInfo.city}}</h3>
        <p>Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
      
      </div>
      
    </div>
    <Footer/>
  </div>
</template>

<script>
import Menu from './Menu.vue';
import topBlock from './components/topBlock.vue';
import Footer from './components/footer.vue';
import {mapState} from 'vuex';

export default{
  data(){
    return{
      title:"USER PROFILE",
    }
  },
  computed:{
    ...mapState(['accInfo']),
  },
  components:{
    Menu,
    topBlock,
    Footer,
  }
  
}
</script>

<style scoped>
*{
  font-family:'poppins';
	color:#bbb;
}
.userinfo{
  display:flex;
  justify-content:space-between;
}
.row1,.row2,.row3,.row4{
  display:grid;
  grid-template-rows:20px 35px;
  padding: 8px 0;
}
.row1{
  grid-template-columns:30% 25% 45%;
}
.row2{  
  grid-template-columns:50% 50%;
}
.row4{
  grid-template-columns:40% 40% 20%;
}
.edit-profile{
  position:relative;
  background-color:rgb(39,41,61);
  border-radius:5px;
  width:64%;
  height:568px;
  padding:12px;
  box-sizing:border-box;

}
h1{
  font-weight:normal;
  font-size:16px;
  padding:5px 0 20px;
}
.input-area label{
  font-size:12px;
  color:#999;
}
.input-area input{
	color:#ddd;
	border-radius:5px;
	display:inline-block;
  background-color:rgb(39,41,61);
	margin:0 3px;
	padding:0 10px;
	outline:none;
	border:1px rgb(60,70,90) solid;
}
input:focus{
  border-style:solid;
  border-color: rgb(225,78,220);
  transition:.4s;
}
textarea{
  resize:none;
  outline:none;
  font-size:12px;
  color:#ddd;
  background-color:rgb(39,41,61);
	border:none;
  border-bottom:1px solid rgb(60,70,90);
	display:block;
  padding:20px;
  width:50%;
  height:60px;
}
textarea:focus{
  border-bottom:1px solid rgb(225,78,220);
  transition:.4s;
}
.btn{
  position:absolute;
  bottom:20px;
  left:20px;
  border-radius:5px;
  padding:8px 35px;
  font-size:14px;
  font-weight:bold;
  color:white;
  background: linear-gradient(10deg,#e14eca,rgb(180,83,260),#e14eca);
  outline:none;
  border:none;
}
.btn:hover{
  bottom:21px;
  transition:.4s;
}
.btn:active{
  bottom:19px;
}

.show-user{
  background-color:rgb(39,41,61);
  border-radius:5px;
  width:32%;
  height:468px;
  padding:20px;
  box-sizing:border-box;
}
.pic-box{
  display:flex;
  justify-content:center;
}
.user-pic{
  height:110px;
  width:110px;
  border-radius:50%;
  border:3px #e14eca solid;
  margin:20px 0 10px;
  object-fit:cover;
  transform: scale(1.1);
}
.show-user h2{
  text-align:center;
  padding:5px;
  font-size:20px;
  color:#ddd;
}
.show-user h3 {
  font-weight:lighter;
  font-size:18px;
  text-align:center;
  padding-bottom:20px;
}

.show-user p{
  font-weight:lighter;
  font-size:14px;
}
</style>
