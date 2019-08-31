<template>
  <div class="content"> <!--把id去除了-->
    <Menu/>
    <topBlock :title="title"/>
    
    <div class="main-chart">
      <div class="chart shipment">

        <div class="btn-area">
          <button type="button" 
            id="btn" class="btn acc"
            @click="showAcc" autofocus>Accounts</button>
          <button type="button" 
            id="btn" class="btn" 
            @click="showPur">Purchases</button>
          <button type="button" 
            id="btn" class="btn ses"
            @click="showSes">Sessions</button>
        </div>

        <Chart :id="'barGraph1'" :data="shipment" :style="bigChartStyle"/>
      </div>
    </div>


    <div class="min-chart">
    
      <div class="chart total">
        <Chart :id="'lineGraph1'" :data="total" :style="minChartStyle"/>
      </div>

      <div class="chart daily">
        <Chart :id="'pieGraph1'" :data="daily" :style="minChartStyle"/>  
      </div>
    
      <div class="chart completed">
        <Chart :id="'lineGraph2'" :data="completed" :style="minChartStyle"/>
      </div>
    
    </div>

    <div style="display:flex;justify-content:space-between;">

      <keep-alive>
        <todolist class="bottom-todo"/>
      </keep-alive>

      <simpleTable :tableData="tableData" class="bottom-table"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Menu from './Menu.vue';
import topBlock from './components/topBlock.vue';
import Footer from './components/footer.vue';
import Chart from "./components/Chart.vue";
import todolist from './components/todolist.vue';
import simpleTable from './components/table.vue';

export default {
  name:"DASHBOARD",
  data(){
    return{
      title:"DASHBOARD",
      fakeData:[],
      tableData:[],
      tem:[],
      keyList:[],
      slaVal:[],
      cliVal:[],
      dailyK:[],
      dailyV:[],
      mainMonth:[],
      mainAccounts:[],
      mainPurchases:[],
      mainSessions:[],
    }
  },
  components:{
    Menu,
    topBlock,
    Footer,
    Chart,
    todolist,
    simpleTable,
  },
  computed:{
    minChartStyle(){
      return{
				height:"310px",
				width:"100%",
			};
    },
    bigChartStyle(){
      return{
				height:"310px",
				width:"100%",
			};
    },
    td(){
      return{
        borderTop:"1px solid rgba(255,255,255,.5)",
	      padding:"12px 5px",
      }
    },
    shipment(){
      return {
        textStyle:{color:'#999'},
        title:{
          text:"Total Shipments",
          textStyle:{
            color:'#999',
            fontStyle:'',
            fontFamily:'poppins',
            fontSize:13,
            fontWeight:100,
          },
          subtext:'Performance',
          subtextStyle:{
            color:'white',
            fontWeight:'lighter',
            fontSize:24,
          },
          padding:[10,0,0,20]
        },
        legend:{
          data:[]
        },
        tooltip: {},
        grid:{
          right:20,
          left:55,
          top:90,
          bottom:60
        },
        xAxis:{
          data: this.mainMonth,
          type:"category",
          offset:15,
          boundaryGap: false,
          axisLine:{show:false},
          axisTick:{show:false},
          splitLine:{
            show:true,
            lineStyle:{color:'rgb(56,45,73)'}
            }
        },
        yAxis:{
          offset:15,
          min:60,
          max:130,
          type:"value",
          axisLine:{show:false},
          axisTick:{show:false},
          axisLabel:{show:true},
          splitLine:{show:false}
        },
        series:[
          {
            name:"Accounts",
            type:"line",
            data: this.tem,
            color:"rgb(65,184,131)",
            smooth:true,
            symbol:'circle',
            symbolSize:8,
            areaStyle:{
              color:{
                type:'linear',
                x:0,
                y:-5,
                x2:0,
                y2:1,
                colorStops:[{
                  offset:0,color:'rgba(65,184,131,.5)',
                },{
                  offset:1,color:'rgb(39,41,61)',
                }]
              }
            }
          }
        ],
      }
		},
    total(){
      return {
        textStyle:{color:'#999'},
        title:{
          text:"Total Shipments",
          textStyle:{
            color:'#999',
            fontStyle:'',
            fontFamily:'poppins',
            fontSize:13,
            fontWeight:100,
          },
          subtext:'763,215',
          subtextStyle:{
            color:'white',
            fontWeight:'lighter',
            fontSize:24,
          },
          padding:[10,0,0,20]
        },
        legend:{
          data:[]
        },
        tooltip: {},
        grid:{
          right:'6%',
          left:'17%',
          top:90,
          bottom:40
        },
        xAxis:{
          data: this.keyList,
          type:"category",
          boundaryGap: false,
          axisLine:{show:false},
          axisTick:{show:false},
          splitLine:{
            show:true,
            lineStyle:{color:'rgb(56,45,73)'}
            }
        },
        yAxis:{
          offset:15,
          min:60,
          max:130,
          type:"value",
          axisLine:{show:false},
          axisTick:{show:false},
          axisLabel:{show:true},
          splitLine:{show:false}
        },
        series:[
          {
            name:"Total Shipments",
            type:"line",
            data: this.slaVal,
            color:"rgb(65,184,131)",
            smooth:true,
            symbol:'circle',
            symbolSize:8,
            areaStyle:{
              color:{
                type:'linear',
                x:0,
                y:-5,
                x2:0,
                y2:1,
                colorStops:[{
                  offset:0,color:'rgba(65,184,131,.5)',
                },{
                  offset:1,color:'rgb(39,41,61)',
                }]
              }
            }
          }
        ],
      }
		},
    daily(){
      return {
        textStyle:{color:'#999'},
        title:{
          text:"Daily Sales",
          textStyle:{
            color:'#999',
            fontStyle:'',
            fontFamily:'poppins',
            fontSize:13,
            fontWeight:100,
          },
          subtext:'3,500$',
          subtextStyle:{
            color:'white',
            fontWeight:'lighter',
            fontSize:24,
          },
          padding:[10,0,0,20]
        },
        legend:{
          data:[]
        },
        tooltip: {},
        grid:{
          right:'6%',
          left:'17%',
          top:90,
          bottom:40
        },
        xAxis:{
          data: this.dailyK,
          type:"category",
          axisLine:{show:false},
          axisTick:{show:false},
          splitLine:{
            show:true,
            lineStyle:{color:'rgb(40,50,78)'}
            }
        },
        yAxis:{
          offset:15,
          interval:20,
          type:"value",
          axisLine:{show:false},
          axisTick:{show:false},
          axisLabel:{show:true},
          splitLine:{
            lineStyle:{color:'rgb(40,50,78)'}
            }
        },
        series:[
          {
            name:"daily",
            type:"bar",
            data:this.dailyV,
            itemStyle:{
              borderWidth:2,
              borderColor:'rgb(30,140,248)'
            },
            barWidth:28,
            smooth:true,
            symbol:'circle',
            symbolSize:8,
            color:{
              type:'linear',
              x:0,
              y:-5,
              x2:0,
              y2:1,
              colorStops:[{
                offset:0,color:'rgba(30,140,248,.5)',
              },{
                offset:1,color:'rgb(39,41,61)',
              }]
            }
          }
        ],
      }
		},
    completed(){
      return {
        textStyle:{color:'#999'},
        title:{
          text:"Completed Tasks",
          textStyle:{
            color:'#999',
            fontStyle:'',
            fontFamily:'poppins',
            fontSize:13,
            fontWeight:100,
          },
          subtext:'12,100K',
          subtextStyle:{
            color:'white',
            fontWeight:'lighter',
            fontSize:24,
          },
          padding:[10,0,0,20]
        },
        legend:{
          data:[]
        },
        tooltip: {},
        grid:{
          right:'6%',
          left:'17%',
          top:90,
          bottom:40
        },
        xAxis:{
          data: this.keyList,
          type:"category",
          boundaryGap: false,
          axisLine:{show:false},
          axisTick:{show:false},
          splitLine:{
            show:true,
            lineStyle:{color:'rgb(56,45,73)'}
            }
        },
        yAxis:{
          offset:15,
          max:140,
          interval:20,
          type:"value",
          axisLine:{show:false},
          axisTick:{show:false},
          axisLabel:{show:true},
          splitLine:{show:false}
        },
        series:[
          {
            name:"completed",
            type:"line",
            data:this.cliVal,
            color:"rgb(251,92,147)",
            smooth:true,
            symbol:'circle',
            symbolSize:8,
            areaStyle:{
              color:{
                type:'linear',
                x:0,
                y:-5,
                x2:0,
                y2:1,
                colorStops:[{
                  offset:0,color:'rgba(251,92,147,.5)',
                },{
                  offset:1,color:'rgb(39,41,61)',
                }]
              }
            }
          }
        ],
      }
		},
    
  },
  
  watch:{
    fakeData(newVal,oldVal){
      this.mainMonth = newVal[0].map(data=> data[0]);
      this.mainAccounts = newVal[0].map(data=> data[1]);
      this.mainPurchases = newVal[0].map(data=> data[2]);
      this.mainSessions = newVal[0].map(data=> data[3]);
      this.keyList = newVal[1].map( data => data[0]);
      this.slaVal = newVal[1].map( data => data[1]);
      this.cliVal = newVal[1].map( data => data[2]);
      this.dailyK = newVal[2].map( data => data[0]);
      this.dailyV = newVal[2].map( data => data[1]);

      this.tem=this.mainAccounts;
      // console.log("key計算",keyD);
    },
    deep:true
  },
  methods:{
    showAcc(){ 
      this.tem=this.mainAccounts;
    },
    showPur(){
      this.tem=this.mainPurchases;
    },
    showSes(){
      this.tem=this.mainSessions;
    }
  },
  
  created() {
    // console.log('dash,created');
    fetch('/fakeData.json')
      .then(res => {
        // console.log('chart資料取得')
        return res.json()
      })
      .then( data => this.fakeData = data);

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
/* 共用屬性 */

h1{
  font-weight:lighter;
  color:white;
  margin: 20px 0;
}
.chart{
  background-color:rgb(39,41,61);
  border-radius:5px;
  padding:10px 0 0;
}
/* 特定屬性 */
.min-chart,.main-chart,.side-chart{
  display:flex;
  justify-content:space-between;
}

.main-chart{
  padding:0 0 30px 0;
}
.total,.completed,.daily{
  width:31.5%;
}
.shipment{
  width:100%;
  position:relative;
}
.btn-area{
  position:absolute;
  right:18px;
  top:15px;
}
.btn{
  position:relative;
  color:rgb(225,78,220);
  background:rgb(39,41,61);
  box-sizing:border-box;
  border:1px solid rgb(225,78,220);
  padding:4px 16px;
  margin:-2px;
  z-index:5;
  outline:none;
}
.btn:hover{
  top:-1px;
}
.btn:active,.btn:focus{
  color:white;
  background: linear-gradient(10deg,#e14eca,rgb(180,83,260),#e14eca);
  transition: all .5s;
}
/*
.btn-active{
  color:white;
  background: linear-gradient(10deg,#e14eca,rgb(180,83,260),#e14eca);
  transition: all .5s;
}*/
.acc{
  border-radius:5px 0 0 5px;
}
.ses{
  border-radius:0 5px 5px 0;
}
.bottom-todo{
  margin:30px 0;
  height:470px;
	width:48.5%;
}
.bottom-table{
  margin:30px 0;
  height:520px;
	width:48.5%;
}
</style>
