<template>
  <div class="footer">
    <div class="link">
      <a href="https://vuejs.org">VUE DASHBOARD</a>
      <a href="https://www.google.com.tw/">BLOG</a>
      <a href="https://en.wikipedia.org/wiki/License">LICENSES</a>
    </div>
    <div class="copyright">
      <p>&copy; 2019 made by Evan for a better life</p>
    </div>
  </div>
</template>

<style scoped>
div{
  box-sizing: border-box;
  font-size: 10px;
  color: white;
}
.footer{
	background-color: rgb(29,30,46);
  padding-top:100px;
	height:120px;
	width:100%;
  font-weight:lighter;
}
.link{
  float:left;
  width:230px;
  display:flex;
  justify-content:space-between;
}
.link a{
  text-decoration:none;
  color:white;
}
.copyright{
  float:right;
}
</style>