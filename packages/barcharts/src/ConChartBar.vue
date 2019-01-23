<template>
    <div :id="Id">

    </div>
</template>

<script>
    export default {
        name: "ConChartBar",
      props:{
        chartsinfo:Object,
          Id:{
            type:String,
              default:"barbox"
          }
      },
      data(){
          return{
            textColor:"#444",
            axisColor:"#666",
            color:["#ccc"],
            splitLineStyle:"solid",
            name:'数据',
            barWidth:"50%",
            titleShow:false,
            mainTitle:"主标题",
            subTitle:"",
            titlePosition:"left"
          }
      },
      methods:{
        showCharts(){
          var myChart = this.echarts.init(document.getElementById(this.Id));
          var color = this.chartsinfo.color || this.color ;
        var option = {
          title: {
            text: this.chartsinfo.mainTitle||this.mainTitle,
            subtext: this.chartsinfo.subTitle||this.subTitle,
            show:this.chartsinfo.titleShow || this.titleShow,
            x:this.chartsinfo.titlePosition || this.titlePosition
          },
            // color:this.chartsinfo.color || this.color,
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              top: '10%',
              bottom:'3%',
              containLabel: true
            },
            xAxis : [
              {
                type : 'category',
                data :this.chartsinfo.legend,
                splitLine:{
                  show: this.chartsinfo.XsplitLineShow === false ? this.chartsinfo.XsplitLineShow:true
                },
                axisLine: {
                  lineStyle: {
                    color: this.chartsinfo.axisColor||this.axisColor

                  }
                },
                axisLabel:{
                  color:"#fadb71",
                  textStyle:{
                    color: this.chartsinfo.textColor||this.textColor

                  },
                },
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis : [
              {
                type : 'value',
                splitLine:{
                  show: this.chartsinfo.YsplitLineShow ===false?this.chartsinfo.YsplitLineShow:true, //刻度线
                  lineStyle:{
                    type:this.chartsinfo.splitLineStyle||this.splitLineStyle
                  }
                },
                axisLine: {
                  show:true, // 坐标轴是否显示
                  lineStyle: {
                    color: this.chartsinfo.axisColor||this.axisColor

                  }
                },
                axisLabel:{
                  color:"#fadb71",
                  textStyle:{
                    color: this.chartsinfo.textColor||this.textColor

                  },
                },
              }
            ],
            series : [
              {
                name:this.chartsinfo.name ||this.name,
                type:'bar',
                itemStyle:{
                  normal:{
                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function (params){
                      var colorList = color
                      return colorList[params.dataIndex];
                    }
                  },
                  //鼠标悬停时：
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                },
                barWidth:this.chartsinfo.barWidth || this.barWidth,
                data:this.chartsinfo.data
              }
            ]
          };

          myChart.setOption(option);

        },

      },
      mounted() {
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
