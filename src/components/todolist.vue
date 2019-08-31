<template>
	
	<form class="task-list">
		<h1>TASKS({{this.tasks.length}})</h1>
		
		<div class="input-area">
		<!--	<textarea type="text" v-model="text"/>-->
			<div style="padding:5px 0;width:100%">
				<h2>Title</h2>
				<input type="text" v-model="title"/>
				<h2>Texts</h2>
				<input type="text" v-model="text"/>
				<i class="fas fa-plus-square btn" @click="submit"></i>
			</div>
		</div>

		<ul>
			<li v-for=" (task,idx) in tasks">
				<hr/>
				<input type="checkbox" class="fin-check"/>
				<div style="width:70%;padding:10px 0 10px 40px">
					
					<h3 style="font-size:14px;padding-bottom:10px">
						{{task.title}}
					</h3>
					<p>{{task.text}}</p>
				</div>

			    <i class="fas fa-pencil-alt btn-edit" @click="edit(idx)"></i>
					<i class="fas fa-trash-alt btn-edit" @click="remove(idx)"></i>

			</li>
		</ul>

	</form>



</template>

<script>
export default {
	data(){
		return {
			title:'',
			text:'',
			tasks:[	
				{
					title:'Update the Documentation',
					text:'Dwuamish Head, Seattle, WA 8:47 AM'
				},{
					title:'GDPR Compliance',
					text:'The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states.'
				},{
					title:'Solve the issues',
					text:'Fifty percent of all respondents said they would be more likely to shop at a company'
				},{
					title:'Release v2.0.0',
					text:'Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM'
				},{
					title:'Export the processed files',
					text:'The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs.'
				},{
					title:'Arival at export process',
					text:'Capitol Hill, Seattle, WA 12:34 AM'
				}
			],
		}
	},
	methods:{
		submit(){
			if(this.text||this.title!==''){
				this.tasks.push({title:this.title,text:this.text});
				this.title='';
				this.text='';
			}
		},
		edit(idx){
			this.title=this.tasks[idx].title;
			this.text=this.tasks[idx].text;
			this.tasks.splice(idx,1);
		},
		remove(idx){
			this.tasks.splice(idx,1);			
		}
	}
}
</script>

<style scoped>
.task-list{
	box-sizing:border-box;
	background-color:rgb(39,41,61);
	border-radius:5px;
	padding:15px;
	color:white;
}
h1{
	font-size:14px;
 	font-weight:lighter;
	 color:#999;
}
h2{
	display:inline-block;
	font-weight:lighter;
	font-size:16px;
}
p{
	color:#777;
	font-weight:lighter;
	font-size:14px;
}
hr{
  width:100%;
  margin:auto;
  transform: scaleY(0.5);
  border-top:none;
  border-left:none;
}
.input-area{
	display:flex;
	padding: 5px 0;
	justify-content:space-between;
}
input{
	color:white;
	border-radius:5px;
	display:inline-block;
	background-color:rgb(60,70,90);
	margin:0 3px;
	padding:0 3px;
	outline:none;
	border:1px rgba(0,0,0,.5) solid;
	width:30%;
}
.btn{
	color:#888;
	font-size:20px;
	line-height:30px;
	float:right;
	margin-right:2%;
}
.fas:hover{
	color:white;
	transition:.3s;
}
.fin-check{
	position: absolute;
	top:50%;
	left:-12%;
}
ul{
	height:370px;
	overflow:scroll;
	overflow-x:hidden;
	overflow-y:auto;
	padding-left:0;
}
li{
	list-style-type: none;
	position:relative;
	padding-left:1%;
}
.btn-edit{
	position:absolute;
	color:#888;
	top:40%;
}
.fa-pencil-alt{
	right:13%;
}
.fa-trash-alt{
	right:6%;
}
.finItem{
	text-decoration:line-through;
	color:#666;
}
</style>