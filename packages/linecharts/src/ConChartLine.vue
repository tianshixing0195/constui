<template>
    <div :id="Id">

    </div>
</template>

<script>
    export default {
        name: "ConChartLine",
      props:{
        chartsinfo:Object,
          Id:{
              type:String,
              default:"linebox"
          }
      },
      data(){
        return {
            textColor:"#444",
            axisColor:"#666",
            smooth:false,
            color:"#ccc",
            XsplitLineShow:true,
            name:'数据'
        }
      },
      methods:{
          showCharts(){
            var myChart = this.echarts.init(document.getElementById(this.Id));
            // 指定图表的配置项和数据
            var option = {
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow'
                },
              },
              color:this.chartsinfo.color || this.color,  //颜色
              grid: {    //盒子距边框的距离
                left: '3%',
                right: '4%',
                bottom: '5%',
                top:"10%",
                containLabel: true
              },

              xAxis: {
                splitLine:{
                  show:this.XsplitLineShow   //中间的刻度线false:隐藏
                },
                type: 'category',
                //boundaryGap: false,
                data:this.chartsinfo.legend,
                axisLabel:{  //坐标轴上字的颜色
                  textStyle:{
                    color: this.chartsinfo.textColor||this.textColor
                  },
                },
                axisLine: {  //坐标轴的颜色
                  lineStyle: {
                    color:  this.chartsinfo.axisColor || this.axisColor
                  }
                },
              },
              yAxis: {
                type: 'value',
                splitLine:{show: true},
                axisLine: {
                  lineStyle: {
                    color: this.chartsinfo.axisColor || this.axisColor
                  }
                },
                axisLabel:{
                  color:"#ccc",
                  textStyle:{
                    color:this.chartsinfo.textColor||this.textColor
                  },
                },
              },
              series: [
                {
                  name:this.chartsinfo.name ||this.name,
                  type:'line',
                  symbol:"circle",
                  symbolSize :this.chartsinfo.size ||10,
                   smooth: this.chartsinfo.lineSmooth||this.smooth,
                  lineStyle:{   //中间折线的样式
                    // color:"#00f",
                    width:2

                  },
                  data:this.chartsinfo.data,
                }
              ]
            };

            myChart.setOption(option);

          },
      },
      mounted() {
        // console.log(this.chartsinfo)

          this.showCharts()

      }


    }
</script>

<style scoped>
  div{
     width: 100%;
     height: 100%;
  }
</style>
