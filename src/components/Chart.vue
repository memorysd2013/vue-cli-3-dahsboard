<template>
  <div :id="id" :data="data"/>
</template>

<script>
export default {
	name:"chart",
	data(){
		return{
			chart:null,
			option:null,
		};
	},
	props:['id','data'],
	watch:{
		data:{
			handler(newVal,val){
				this.drawGraph(this.id,newVal);
			}
		},
		deep:true
		
	},
	methods:{
		drawGraph(id,data){
			let _this=this;
			let myChart=document.getElementById(id);
			this.chart=this.$echarts.init(myChart);
			this.chart.setOption(data);
			window.addEventListener("resize",function(){
				_this.chart.resize();
			})
		}
		
	},
	computed:{
	
	},
	mounted(){
		// console.log("chart準備生成"+this.id);
		// console.log(this.data);
		this.drawGraph(this.id,this.data);
	},
	beforeDestroy() {
		if(this.chart){
			this.chart.clear();
		}
	}
	
};
</script>

<style scoped>


</style>

