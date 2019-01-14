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
      option: {
        title: {
          text: "天气情况统计",
          subtext: "虚构数据",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          // orient: 'vertical',
          // top: 'middle',
          bottom: 10,
          left: "center",
          data: ["西凉", "益州", "兖州", "荆州", "幽州"]
        },
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [
              {
                value: 1548,
                name: "幽州",
                label: {
                  normal: {
                    formatter: [
                      "{title|{b}}{abg|}",
                      "  {weatherHead|天气}{valueHead|天数}{rateHead|占比}",
                      "{hr|}",
                      "  {Sunny|}{value|202}{rate|55.3%}",
                      "  {Cloudy|}{value|142}{rate|38.9%}",
                      "  {Showers|}{value|21}{rate|5.8%}"
                    ].join("\n"),
                    backgroundColor: "#eee",
                    borderColor: "#777",
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                      title: {
                        color: "#eee",
                        align: "center"
                      },
                      abg: {
                        backgroundColor: "#333",
                        width: "100%",
                        align: "right",
                        height: 25,
                        borderRadius: [4, 4, 0, 0]
                      },
                      Sunny: {
                        height: 30,
                        align: "left",
                      
                      },
                      Cloudy: {
                        height: 30,
                        align: "left",
                      
                      },
                      Showers: {
                        height: 30,
                        align: "left",
                      
                      },
                      weatherHead: {
                        color: "#333",
                        height: 24,
                        align: "left"
                      },
                      hr: {
                        borderColor: "#777",
                        width: "100%",
                        borderWidth: 0.5,
                        height: 0
                      },
                      value: {
                        width: 20,
                        padding: [0, 20, 0, 30],
                        align: "left"
                      },
                      valueHead: {
                        color: "#333",
                        width: 20,
                        padding: [0, 20, 0, 30],
                        align: "center"
                      },
                      rate: {
                        width: 40,
                        align: "right",
                        padding: [0, 10, 0, 0]
                      },
                      rateHead: {
                        color: "#333",
                        width: 40,
                        align: "center",
                        padding: [0, 10, 0, 0]
                      }
                    }
                  }
                }
              },
              { value: 535, name: "荆州" },
              { value: 510, name: "兖州" },
              { value: 634, name: "益州" },
              { value: 735, name: "西凉" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "天气情况统计",
          subtext: "虚构数据",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          // orient: 'vertical',
          // top: 'middle',
          bottom: 10,
          left: "center",
          data: ["西凉", "益州", "兖州", "荆州", "幽州"]
        },
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [
              {
                value: 1548,
                name: "幽州",
                label: {
                  normal: {
                    formatter: [
                      "{title|{b}}{abg|}",
                      "  {weatherHead|天气}{valueHead|天数}{rateHead|占比}",
                      "{hr|}",
                      "  {Sunny|}{value|202}{rate|55.3%}",
                      "  {Cloudy|}{value|142}{rate|38.9%}",
                      "  {Showers|}{value|21}{rate|5.8%}"
                    ].join("\n"),
                    backgroundColor: "#eee",
                    borderColor: "#777",
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                      title: {
                        color: "#eee",
                        align: "center"
                      },
                      abg: {
                        backgroundColor: "#333",
                        width: "100%",
                        align: "right",
                        height: 25,
                        borderRadius: [4, 4, 0, 0]
                      },
                      Sunny: {
                        height: 30,
                        align: "left",
                       
                      },
                      Cloudy: {
                        height: 30,
                        align: "left",
                      
                      },
                      Showers: {
                        height: 30,
                        align: "left",
                     
                      },
                      weatherHead: {
                        color: "#333",
                        height: 24,
                        align: "left"
                      },
                      hr: {
                        borderColor: "#777",
                        width: "100%",
                        borderWidth: 0.5,
                        height: 0
                      },
                      value: {
                        width: 20,
                        padding: [0, 20, 0, 30],
                        align: "left"
                      },
                      valueHead: {
                        color: "#333",
                        width: 20,
                        padding: [0, 20, 0, 30],
                        align: "center"
                      },
                      rate: {
                        width: 40,
                        align: "right",
                        padding: [0, 10, 0, 0]
                      },
                      rateHead: {
                        color: "#333",
                        width: 40,
                        align: "center",
                        padding: [0, 10, 0, 0]
                      }
                    }
                  }
                }
              },
              { value: 535, name: "荆州" },
              { value: 510, name: "兖州" },
              { value: 634, name: "益州" },
              { value: 735, name: "西凉" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
      // //需要的话下面内容copy到主体代码块即可
      //   backgroundColor: '#fff',
      //   //标题
      //   title: {
      //     text: '流量来源',
      //     subtext:'饼图示例',
      //     left: 'center',
      //     top: 20,
      //     textStyle: {
      //       color: '#000',
      //       //fontStyle:'italic'//标题字体
      //     }
      //   },
      //   //弹窗，响应鼠标指向，显示具体细节
      //   tooltip : {
      //     trigger: 'item',//以具体项目触发弹窗
      //     /*
      //     内容格式器，一共有abcd四个代号，例如在饼图中，{a}指系列，即流量来源，{b}指数据项目，如搜索引擎，{c}指数值，如
      //     value，{d}百分比。{x}本身代表了相应字符，可以和其他字符拼凑，在弹窗中显示
      //     */
      //     formatter: "{a} <br/>{b} : {c} ({d}%)"
      //   },
      //   //图例，选择要显示的项目
      //   legend:{
      //     orient:'vertical',
      //     left:'left',
      //     textStyle:{
      //       color:'#c8c8d0'
      //     },
      //     //data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']  //注意要和数据的name相对应
      //      data:['维生素','钙','铁','水','蛋白质']
      //   },
      //   //工具箱
      //   toolbox:{
      //     show:true,//显示工具箱
      //     feature:{
      //       dataView:{show:true}, //以文字形式显示数据
      //       restore:{show:true},   //还原
      //       //dataZoom:{show:true}, //区域缩放
      //       saveAsImage:{show:true},  //保存图片
      //       //magicType:{type:['line','bar']}//动态数据切换，数据显示可以在该规定内容中切换显示方式，
      //     }
      //   },
      //   //视觉映射组件，将数据映射到视觉元素上
      //   visualMap: {
      //     show: false,
      //     min: 10,
      //     max: 650,
      //      dimension: 0, //选取数据的维度，如人数据：[身高，体重]，则1代表将体重进行映射，默认值为数组的最后一位
      //     // seriesIndex: 4, //选取数据集合中的哪个数组，如{一班}，{二班}，默认选取data中的所有数据集
      //     inRange: {
      //       //选定了要映射的对象，用inRange详细写要渲染的具体细节，[x，y]中x指最小值对应的量（亮度，饱和度等），y指最大值对应的量，其余的按各自value线性渲染
      //       color:['yellowgreen'],
      //       colorLightness: [0,1],
      //       colorSaturation:[1,1.5]
      //     }
      //   },
      // //数据
      //   series : [
      //     {
      //       name:'访问来源',
      //       type:'pie',
      //       radius : '55%',
      //       center: ['50%', '50%'],
      //       data:[

      //         {value:335,name: '维生素'},
      //         {value:310,name: '钙'},
      //         {value:274,name: '铁'},
      //         {value:235,name: '水'},
      //         {value:400,name: '蛋白质'}

      //       ]

      //         // {value:335, name:'直接访问'},
      //         // {value:310, name:'邮件营销'},
      //         // {value:274, name:'联盟广告'},
      //         // {value:235, name:'视频广告'},
      //         // {value:400, name:'搜索引擎'}
      //       .sort(function (a, b) { return a.value - b.value; }),
      //       roseType: 'radius',//角度和半径展现百分比，'area'只用半径展现
      //       label: { //饼图图形的文本标签
      //         normal: {  //下同，normal指在普通情况下样式，而非高亮时样式
      //           textStyle: {
      //             color: 'rgba(255, 255, 255, 0.3)'
      //           }
      //         }
      //       },
      //       labelLine: {  //引导线样式
      //         normal: {
      //           lineStyle: {
      //             color: 'rgba(255, 255, 255, 0.3)'
      //           },
      //           smooth: 1, //0-1，越大越平滑弯曲
      //           length: 10,  //从块到文字的第一段长
      //           length2: 20  //拐弯到文字的段长
      //         }
      //       },
      //       itemStyle: { //图例样式
      //         normal: {
      //           color: '#yellow',
      //           shadowBlur: 10,//阴影模糊程度
      //           shadowColor: 'rgba(0, 0, 0, 0.5)'//阴影颜色，一般黑
      //         }
      //       },

      //       animationType: 'scale', //初始动画效果，scale是缩放，expansion是展开
      //       animationEasing: 'elasticOut', //初始动画缓动效果
      //       animationDelay: function (idx) {  //数据更新动画时长，idx限定了每个数据块从无到有的速度
      //         return Math.random() * 200;
      //       }
      //     }
      //   ]
      // });
      // title: { text: '在Vue中使用echarts' },
      // tooltip: {},
      // xAxis: {
      //     data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      // },
      // yAxis: {},
      // series: [{
      //     name: '销量',
      //     type: 'bar',
      //     data: [5, 20, 36, 10, 10, 20]
      // }]
    }
  }
};
</script>

<style>
</style>
