//start!
$(document).ready(function () {

    var myChart1 = echarts.init(document.getElementById("sw-zhexian1"));
    var myChart2 = echarts.init(document.getElementById("sw-online1"));
    var myChart3 = echarts.init(document.getElementById("sw-offline1"));

    // 1.sw-zxhexian1折线图
    var option1 = {
        grid: {
            top: '5%',
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
                                    offset: 0.3,
                                    color: '#453043'
                                },
                                {
                                    offset: 1,
                                    color: '#2a3040'
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
                label: {
                    normal: {
                        show: true,
                    }
                },
            },

        ]
    };
    // 2.sw-online1饼图
    var option2 = {
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
    // 3.sw-offline1饼图
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

    myChart1.setOption(option1);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
    window.addEventListener("resize", function () {
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
    });
});
//end!