//start!
$(document).ready(function () {

    var myChart = echarts.init(document.getElementById("dl-zhexian"));


    var option = {
        grid: {
            top:'5%',
            left: '0%',
            right: '2%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00','14:00', '16:00', '18:00', '20:00', '22:00', '0:00'],
            // x轴的字体样式
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#a6acbc',
                    fontSize: '14'
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

            // 去除坐标轴上的刻度线
            axisTick: {
                 show: false
            }      
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
                    fontSize: '12'
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
                data: [18324, 6857, 3239, 1964, 2135, 1230, 3855,2457, 3696,18953, 12586, 40669, 22587],
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