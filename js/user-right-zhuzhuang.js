//start!
$(document).ready(function () {

    var myChart = echarts.init(document.getElementById("user-right"));


    var option = {
        grid: {
            left: '-1%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['AGE', '<15', '15-20', '20-25', '25-30', '30-40', '>40'],
            // x轴的字体样式
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#a6acbc',
                    fontSize: '17.6'
                }
            },
            // x轴的颜色和宽度
            axisLine: {
                lineStyle: {
                    color: '#5c6270',
                    width: 3, //这里是坐标轴的宽度,可以去掉
                }
            },

            // 去除坐标轴上的刻度线
            axisTick: {
                show: false
            }
        }],
        yAxis: [{
            type: 'value',
            splitNumber: 2,
            scale: true,
            show: false,
            splitLine: {　　　　
                show: false　　
            }
        }],
        series: [{
                name: 'MEN',
                type: 'bar',
                data: [0, 332, 301, 334, 390, 330, 320],
                itemStyle: {
                    normal: {
                        color: '#b3b8c6'
                    }
                },
            },
            {
                name: 'WOMEN',
                type: 'bar',
                stack: '广告',
                data: [0, 132, 101, 134, 90, 230, 210],
                itemStyle: {
                    normal: {
                        color: '#dd2457'
                    }
                },
            },

        ]
    };


    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
});
//end!