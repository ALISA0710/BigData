//start!
$(document).ready(function () {

    var myChart = echarts.init(document.getElementById("sw-zhexian1"));



    var option = {
        grid: {
            top: '5%',
            left: '0%',
            right: '11%',
            bottom: '5%',
            containLabel: true
        },

        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['SUN', 'MON', 'TUE', 'WEN', 'THR', 'FRI', 'SAT'],
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
        }],
        yAxis: [{
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
        }],
        series: [{
            type: 'line',
            areaStyle: {
                // 折线区域渐变
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                            offset: 0,
                            color: '#d22a5d'
                        }, {
                            offset: 0.3,
                            color: '#453043'
                        }, {
                            offset: 1,
                            color: '#2a3040'
                        }]
                    )
                }
            },
            itemStyle: {
                normal: {
                    lineStyle: {
                        // 折线颜色
                        color: '#d22a5d'
                    }
                }
            },
            data: [9268, 9632, 46547, 104332, 136993, 111545, 90897],
            markPoint: {
                symbol: 'rect',
                symbolSize: [60, 20],
                symbolOffset: ['0%', '100%', '50%', '100%'],
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#585c67' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#585c67' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },

                    },
                },
                data: [{
                    name: '',
                    value: 9268,
                    xAxis: 0,
                    yAxis: 9268
                }, {
                    name: '',
                    value: 9632,
                    xAxis: 1,
                    yAxis: 9632
                }, {
                    name: '',
                    value: 46547,
                    xAxis: 2,
                    yAxis: 46547
                }, {
                    name: '',
                    value: 104332,
                    xAxis: 3,
                    yAxis: 104332
                }, {
                    name: '',
                    value: 136993,
                    xAxis: 4,
                    yAxis: 136993
                }, {
                    name: '',
                    value: 111545,
                    xAxis: 5,
                    yAxis: 111545
                }, {
                    name: '',
                    value: 90897,
                    xAxis: 6,
                    yAxis: 90897
                }],
            }
        }]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
});
//end!