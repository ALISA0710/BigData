//start!
$(document).ready(function () {
    
        var myChart = echarts.init(document.getElementById("online-chart-circle"));
    
    
        var option2= {
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '100%',
                    center: ['50%', '50%'],
                    data:[690,310],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            // shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                     color:['#e02a5b','#474b57',],
                    labelLine: {
        normal: {
        show: false
        }
        }
                }
            ]
        };
    
        myChart.setOption(option2);
    });
    //end!