//start!
$(document).ready(function () {
    
        var myChart4= echarts.init(document.getElementById("m-phone-zhexian"));
        var myChart5= echarts.init(document.getElementById("dl-zhexian"));
        var myChart6= echarts.init(document.getElementById("standalone"));
        var myChart7= echarts.init(document.getElementById("mobile"));
        var myChart8= echarts.init(document.getElementById("pc"));


        // 4.m-phone-zhexian折线图
        var option4 = {
            grid: {
                top: '5%',
                left: '2%',
                right: '2%',
                bottom: '1%',
                containLabel: true
            },
    
            tooltip: {
                // trigger: 'item',
                formatter: "{c} min"
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
        // 5.dl-zhexian
        var option5= {
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
                },margin:18,
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
                    },margin:18
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
        // 6.standalone饼图
        var data6 = [{
            value: 1055,
            name: '1'
        }, {
            value: 310,
            name: '2'
        }, {
            value: 234,
            name: '3'
        }, {
            value: 135,
            name: '4'
        }, {
            value: 248,
            name: '5'
        }, {
            value: 255,
            name: '6'
        }, {
            value: 310,
            name: '7'
        }, {
            value: 234,
            name: '8'
        }, {
            value: 235,
            name: '9'
        }, {
            value: 435,
            name: 'others'
        }];
        
        var option6 = {
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            color: ['#dd2457', '#6b707e', '#dd2457', '#474b57', '#6b707e', '#dd2457', '#474b57', '#dd2457', '#6b707e', '#474b57'],
            series: [{
                type: 'pie',
                clockwise: true, //饼图的扇区是否是顺时针排布
                radius: '100%',
                center: ['50%', '50%'], //饼图的中心（圆心）坐标
                radius: [25, 80], //饼图的半径
                hoverAnimation: false,
                label: { //标签的位置
                    normal: {
                        show: true,
                        position: 'inside', //标签的位置
                        formatter: "{b}",
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    }
                },
                data: data6
            }, {
                type: 'pie',
                radius: '100%',
                clockwise: true,
                hoverAnimation: false,
                center: ['50%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, 26], //饼图的半径
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data: data6
            }],
            animation:false
        };
        // 7.mobile饼图
        var data7 = [{
            value: 1055,
            name: '1'
        }, {
            value: 310,
            name: '2'
        }, {
            value: 234,
            name: '3'
        }, {
            value: 135,
            name: '4'
        }, {
            value: 248,
            name: '5'
        }, {
            value: 255,
            name: '6'
        }, {
            value: 310,
            name: '7'
        }, {
            value: 234,
            name: '8'
        }, {
            value: 235,
            name: '9'
        }, {
            value: 435,
            name: 'others'
        }];
        
        var option7= {
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            color: ['#dd2457', '#6b707e', '#dd2457', '#474b57', '#6b707e', '#dd2457', '#474b57', '#dd2457', '#6b707e', '#474b57'],
            series: [{
                name: '违规次数',
                type: 'pie',
                clockwise: true, //饼图的扇区是否是顺时针排布
                radius: '100%',
                center: ['50%', '50%'], //饼图的中心（圆心）坐标
                radius: [25, 80], //饼图的半径
                hoverAnimation: false,
                label: { //标签的位置
                    normal: {
                        show: true,
                        position: 'inside', //标签的位置
                        formatter: "{b}",
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    }
                },
                data: data7
            }, {
                type: 'pie',
                radius: '100%',
                clockwise: true,
                hoverAnimation: false,
                center: ['50%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, 26], //饼图的半径
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data: data7
            }],
            animation:false
        };
        // 8.pc饼图
        var data8 = [{
            value: 1055,
            name: '1'
        }, {
            value: 310,
            name: '2'
        }, {
            value: 234,
            name: '3'
        }, {
            value: 135,
            name: '4'
        }, {
            value: 248,
            name: '5'
        }, {
            value: 255,
            name: '6'
        }, {
            value: 310,
            name: '7'
        }, {
            value: 234,
            name: '8'
        }, {
            value: 235,
            name: '9'
        }, {
            value: 435,
            name: 'others'
        }];
        
        var option8 = {
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            color: ['#dd2457', '#6b707e', '#dd2457', '#474b57', '#6b707e', '#dd2457', '#474b57', '#dd2457', '#6b707e', '#474b57'],
            series: [{
                name: '违规次数',
                type: 'pie',
                clockwise: true, //饼图的扇区是否是顺时针排布
                radius: '100%',
                center: ['50%', '50%'], //饼图的中心（圆心）坐标
                radius: [25, 80], //饼图的半径
                hoverAnimation: false,
                label: { //标签的位置
                    normal: {
                        show: true,
                        position: 'inside', //标签的位置
                        formatter: "{b}",
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    }
                },
                data: data8
            }, {
                type: 'pie',
                radius: '100%',
                clockwise: true,
                hoverAnimation: false,
                center: ['50%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, 26], //饼图的半径
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data: data8
            }],
            animation:false
        };
        
        myChart4.setOption(option4);
        myChart5.setOption(option5);
        myChart6.setOption(option6);
        myChart7.setOption(option7);
        myChart8.setOption(option8);

        window.addEventListener("resize", function () {
            myChart4.resize();
            myChart5.resize();
            myChart6.resize();
            myChart7.resize();
            myChart8.resize();
        });
    });
    //end!