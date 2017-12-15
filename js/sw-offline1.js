//start!
$(document).ready(function () {

    var myChart = echarts.init(document.getElementById("sw-offline1"));


    var option3 = {
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: '100%',
            center: ['50%', '50%'],
            data: [690, 310],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    // shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            color: ['#e02a5b', '#474b57', ],
            labelLine: {
                normal: {
                    show: false
                }
            }
        }],
    animation: false
    };
    
    myChart.setOption(option3);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
});
//end!