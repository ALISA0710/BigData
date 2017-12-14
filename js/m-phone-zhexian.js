//start!
$(document).ready(function () {

    var myChart = echarts.init(document.getElementById("m-phone-zhexian"));


    var option4 = {
        grid: {
            top:'5%',
            left: '2%',
            right: '2%',
            bottom: '1%',
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
                    fontSize: '10'
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
                formatter: '{value} min',
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
                        },
                        formatter: '{value} min',
                    }
                },
                data: [38, 28, 33, 40, 38, 49, 51],
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

    myChart.setOption(option4);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
});
//end!