//start!
$(document).ready(function () {

    var myChart = echarts.init(document.getElementById("film-day-charts"));


    var option = {
        grid: {
            top:'5%',
            left: '0%',
            right: '11%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['SUN', 'MON', 'TUE', 'WEN', 'THR', 'FRI', 'SAT'],
            // x轴的字体样式
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#a6acbc',
                    fontSize: '17.6'
                }
            },
            // 控制网格线是否显示
            splitLine: {
                show: true,
                //  改变轴线颜色
                lineStyle: {
                    // 使用深浅的间隔色
                    color: "#5c6270",
                    width: 1, //这里是坐标轴的宽度,可以去掉
                }
            },
            // x轴的颜色和宽度
            axisLine: {
                lineStyle: {
                    color: '#5c6270',
                    width: 3, //这里是坐标轴的宽度,可以去掉
                }
            },
            // axisLine: {
            //     show: true
            //     },
            // // 去除坐标轴上的刻度线
            // axisTick: {
            //      show: true
            // }      
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} '
            },
            splitLine: {　　　　
                show: true,
                //  改变轴线颜色
                lineStyle: {
                    // 使用深浅的间隔色
                    color: "#5c6270",
                    width: 1, //这里是坐标轴的宽度,可以去掉
                }
            },
            // y轴的字体样式
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#a6acbc',
                    fontSize: '10'
                }
            },
            // y轴的颜色和宽度
            axisLine: {
                lineStyle: {
                    color: '#5c6270',
                    width: 1, //这里是坐标轴的宽度,可以去掉
                }
            }
        },
        series: [{
                type: 'line',
                areaStyle: {
                    // 折线区域渐变
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#d22a5d'
                                },
                                {
                                    offset: 0.2,
                                    color: '#453043'
                                }
                            ]
                        )
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fff',
                        lineStyle: {
                            // 折线颜色
                            color: '#d22a5d'
                        }
                    }
                },
                data: [9268, 9632, 46547, 104332, 136993, 111545, 90897],
                markPoint: {
                    data: [{
                            type: 'value',
                            name: 'value'
                        },
                        {
                            type: 'value',
                            name: 'value'
                        }
                    ]
                },
                label: {
                    normal: {
                        show: true
                    }
                },
            },

        ]
    };

    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
});
//end!