<template>
  <div>数据可视化
    <div id="myChart" :style="{width: '100vw', height: '100vw'}"></div>
  </div>
</template>
<script>
import echarts from "echarts";

export default {
  data() {
    return {
      
    }
  },
  mounted(){
    var echarts = require('echarts');
    var myChart= echarts.init(document.getElementById('myChart'))
      
        
     var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

    myChart.setOption({option})

  }
};
</script>

<style>
</style>
