//start!
$(document).ready(function () {

            var myChart1 = echarts.init(document.getElementById("sw-zhexian1"));
            var myChart2 = echarts.init(document.getElementById("sw-online1"));
            var myChart3 = echarts.init(document.getElementById("sw-offline1"));

            function dataValue() {
                var value1 = [
                    [9268, 9632, 46547, 104332, 16993, 111545, 90897],
                    [11268, 9632, 46547, 104332, 136993, 111545, 90897],
                    [3268, 9632, 46547, 104332, 106993, 111545, 90897],
                    [100268, 9632, 46547, 104332, 86993, 111545, 90897]
                ];
                var timeName = ['.day', '.week', '.month', '.year'];
                var getTimeValue = function (i) {
                    // 这儿出现了一个新的scope
                    return function () {
                        console.log(value1[i]);
                        setOption1(value1[i]);
                    };
                };
                for (var i = 0; i < timeName.length; i++) {
                    $(timeName[i]).click(getTimeValue(i));
                }
                setOption1(value1[1]);
                function setOption1(_dataValue) {
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
                                data: _dataValue,
                                label: {
                                    normal: {
                                        show: true,
                                    }
                                },
                            },

                        ]
                    };
                    myChart1.setOption(option1);
                    window.addEventListener("resize", function () {
                            myChart1.resize();
                        });
                    }
                    // 2.sw-online1饼图
                    var value2 = [690, 310];
                    var option2 = {
                        series: [{
                            name: '访问来源',
                            type: 'pie',
                            radius: '100%',
                            center: ['50%', '50%'],
                            data: value2,
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
                        // animation: false
                    };
                    // 3.sw-offline1饼图
                    var value3 = [690, 310];
                    var option3 = {
                        series: [{
                            name: '访问来源',
                            type: 'pie',
                            radius: '100%',
                            center: ['50%', '50%'],
                            data: value3,
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
                        // animation: false
                    };

                    myChart2.setOption(option2);
                    myChart3.setOption(option3);
                    window.addEventListener("resize", function () {
                        myChart2.resize();
                        myChart3.resize();
                    });
                }
                dataValue();
            });
        //end!