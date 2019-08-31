<template>
  <div id="app">
     
    <keep-alive>
      <router-view/>
    </keep-alive>
      
  </div>
</template>

<script>
import Menu from './Menu.vue';
import login from './components/login';


export default {
  name: 'App',
 
  components:{
    Menu,
    login,
    
  },
  mounted(){
    //console.log('重新整理時再給資料');
    //this.$store.commit('setAccInfo',this.userAcc);
    
  }
}
</script>

<style>
html{
	background-color: rgb(29,30,46);

}
html, body, .app{
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  
}
*{
  margin:0; /* 消除header與router-view間空白 */
  font-family: 'Poppins', sans-serif;
}
</style>

<style scoped>
.content{
  background-color: rgb(29,30,46);
  /* border-left:125px solid rgb(29,30,46); */
  padding:80px 20px 10px 270px;
  width: 100%;
  height: 100%;  /* 內容足夠撐開時用100% */
  background-color: rgb(29,30,46);
  box-sizing:border-box;
}

</style>