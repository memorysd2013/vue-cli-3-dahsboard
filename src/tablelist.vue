<template>
  <div class="content">
    <Menu/>
    <topBlock :title="title"/>
    
    <simpleTable :tableData="tableData" class="main-table"/>

    <div class="wrap">
        <todolist/>
     </div>

  <Footer/>
  </div>
</template>

<script>
import Menu from './Menu.vue';
import topBlock from './components/topBlock.vue';
import Footer from './components/footer.vue';
import simpleTable from './components/table.vue';
import todolist from './components/todolist.vue';

import {mapState,mapMutations} from 'vuex';

export default {
  data(){
    return{
      title:"TABLE LIST",
      tableData:[],
    }
  },
  computed:{
    ...mapState(['accInfo']),
  },
  components:{
    Menu,
    topBlock,
    Footer,
    simpleTable,
    todolist,

  },
  created(){
		fetch('/fakeTableData.json')
			.then(res => {
				// console.log('table資料取得')
				return res.json()
				})
			.then( data => {
				this.tableData = data
				// console.log(data);
				});
	}
  
}
</script>

<style scoped>
h1{
  font-weight:100;
  color:white;
  margin: 20px 0;
}
.main-table{
  width:100%;
  margin-bottom:30px;
}
.wrap{
  display:flex;
  justify-content:space-between;
}
</style>
