<template>
  <div :id="Id">

  </div>
</template>

<script>
    export default {
        name: "ConChartPie",
      props:{
        chartsinfo:Object,
          Id:{
            type:String,
              default:"piebox"
          }
      },
        data(){
          return {
            orient:'horizontal',
            legendPosition:'left',
            colors:['#f00',"#00f","#ff0","#ccc","#0f0","ff0",'#3f6da3',"#0ff","#f60","#06f","#3f8"],
            textColor:"#444",
            axisColor:"#666",
            radius:'55%',
            piePosition:['50%',"60%"]
          }
        },
        methods:{
          dataShow(){
            let myChart1 =  this.echarts.init(document.getElementById(this.Id));
            let color = this.chartsinfo.colors || this.colors ;

            let option1 = {
              tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                 orient: this.chartsinfo.orient || this.orient,
                 left:this.chartsinfo.legendPosition || this.legendPosition,
                 data: this.chartsinfo.legend,
                textStyle:{
                  color:this.chartsinfo.textColor||this.textColor,
                }
              },
              series : [
                {
                  name: this.chartsinfo.name||'访问来源',
                  type:'pie',
                  radius : this.chartsinfo.radius || this.radius,
                  center: ['50%', '60%'],
                  avoidLabelOverlap: this.chartsinfo.overlap?this.chartsinfo.overlap:false,      //文字在中间固定
                  data:this.chartsinfo.data,
                  labelLine: {
                    normal: {
                      show: true
                    }
                  },
                  label: {
                    normal: {
                      show: false,
                      position: 'center'
                    },
                    emphasis: {
                      show: this.chartsinfo.emphasiShow?this.chartsinfo.emphasiShow :true,    //中间文字是否显示
                      textStyle: {
                        fontSize: this.chartsinfo.fontSize ||'16',
                        fontWeight: 'bold',
                         color:this.chartsinfo.centerTextColor || ""
                      }
                    }
                  },
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                       shadowBlur:this.chartsinfo.shadowBlur || 0,  //是否有阴影
                      color: function (params){
                        var colorList = color;
                        return colorList[params.dataIndex];
                      }
                    }
                  },
                }
              ]
            };
            myChart1.setOption(option1);

          }
        },
      mounted(){
          this.dataShow()
      }
    }
</script>

<style scoped>
  div{
    width: 100%;
    height: 100%;
  }
</style>
