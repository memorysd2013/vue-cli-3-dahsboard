<template>
	<div class="main-table">
		<h1>Simple Table</h1>
		<div class="wrap-table">
			<table>
				<thead>
					<tr>
						<th v-for="head in heads">{{head}}</th>
					</tr>
				</thead>

				<tbody class="body">
					<tr v-for="(item,idx) in tableData">
						
						<td>{{item.name}}</td>
						<td>{{item.country}}</td>
						<td>{{item.city}}</td>
						<td>{{item.salary}}</td>
							
					</tr>
				</tbody>

			</table>
		</div>
	</div>
</template>

<script>
export default {
	props:['tableData'],
	data(){
		return{
			items:[],
			heads:['NAME','COUNTRY','CITY','SALARY'],
			
		};
	},
	
	// created(){
	// 	fetch('/fakeTableData.json')
	// 		.then(res => {
	// 			console.log('table資料取得'+res)
	// 			return res.json()
	// 			})
	// 		.then( data => {
	// 			this.tableData = data
	// 			console.log(data);
	// 			});
	// }
}
</script>

<style scoped>
.main-table{
	box-sizing:border-box;
	background-color:rgb(39,41,61);
	border-radius:5px;
	padding:15px 15px 40px;
	color:white;
}
.wrap-table{
	height:100%;
	overflow:scroll;
	overflow-x:hidden;
	overflow-y:auto;
}
h1{
	font-weight:lighter;
	font-size:16px;
}
table{
	border-collapse: collapse;
	color:#bbb;
	width:100%;

}
th{
	font-size:12px;
	padding:20px 5px 10px;
	text-align:left;
}
.body{
	font-weight:lighter;
	color:#ccc;
	font-size:14px;
}
td{
	border-top:1px solid rgba(255,255,255,.5);
	padding:18px 5px;
}
</style>