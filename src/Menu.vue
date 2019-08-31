<template>
  <div class="menu">
    <div class="title-block">
      <i class="fab fa-vuejs"></i>
      <h1>VUE DASHBOARD</h1>
    </div>
    <hr/>
   
    <router-link to="/dashboard">
    <i class="fas fa-chart-pie"></i>
      DASHBOARD</router-link>
    <router-link to="/tablelist">
    <i class="fas fa-scroll"></i>
      TABLE LIST</router-link>
    <router-link to="/userinfo">
    <i class="fas fa-user"></i>
      USER PROFILE</router-link>
    <a href="" @click.prevent="logout">
    <i class="fas fa-sign-out-alt"></i>LOGOUT</a>

  </div>
</template>

<script>
  export default {
    methods: {
      logout(){
        localStorage.removeItem('token');
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped>

.title-block{
  color:white;
  text-align:center;
  padding:20px 0;

}
.fa-vuejs{
  font-size:24px;
  padding:0 5px;
}
h1{
  font-weight:lighter;
  font-size:16px;
  display:inline-block;
}
hr{
  width:80%;
  margin:auto;
  transform: scaleY(0.5);
  border-top:none;
  border-left:none;
}
.menu{
  position:fixed;
  border-radius:4px;
  left:20px;
  top:80px;
  width:230px;
  height:80%;
  background-color: rgb(64,183,130);
  box-shadow: 10px 0 20px 2px rgba(0,0,0,.3);
}
.fas{
  font-size:16px;
  padding: 0 10px 0 0;
}
a{
  display: block;
  font-size: 12px;
  color: rgba(255,255,255,.7);
  text-decoration: none;
  padding: 12px 40px 12px;
  margin:8px 0;
  box-sizing:border-box;
}
a:hover{
  color:white;
  transition:.3s;
  text-shadow: 3px 1px 3px #333;
}
a.router-link-active{
  color: white;
  transition:.3s;
  border-right:4px solid;
  text-shadow: 3px 1px 3px #333;

}
</style>