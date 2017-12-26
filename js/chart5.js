//start!
$(document).ready(function () {
    
        var myChart14= echarts.init(document.getElementById("view"));
        var myChart15= echarts.init(document.getElementById("p-duration"));
        var myChart16= echarts.init(document.getElementById("p-genre"));
    
        // 14.view折线
        var option14= {
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
        // 15.p-duration饼图
        var scale = 1;
        var echartData15= [{
            value: 8154,
            name: '<5min'
        }, {
            value: 3854,
            name: '5-10min'
        }, {
            value: 3515,
            name: '>10min'
        }, ]
        var rich15= {
            total: {
                color: "#ffc72b",
                fontSize: 40 * scale,
                align: 'center'
            },
            black: {
                color: "#000",
                align: 'center',
                fontSize: 14 * scale,
                padding: [10, 0]
            },
            white: {
                color: '#fff',
                fontSize: 22 * scale,
                align: 'center'
            },
        
        }
        var option15= {
            series: [{
                type: 'pie',
                clockwise: true, //饼图的扇区是否是顺时针排布
                radius: '100%',
                center: ['50%', '50%'], //饼图的中心（圆心）坐标
                radius: ['8%', '100%'], //饼图的半径
                hoverAnimation: false,
                color: ['#dd2457', '#6b707e', '#474b57'],
                label: {
                    normal: {
                        show: true,
                        position: 'inner',
                        formatter: function(params, ticket, callback) {
                            var total = 0; //总数量
                            var percent = 0; //占比
                            echartData15.forEach(function(value, index, array) {
                                total += value.value;
                            });
                            percent = ((params.value / total) * 100).toFixed(1);
                            return '{black|' + params.name + '}\n{white|' + percent + '%}';
                        },
                        rich: rich15
                    },
                },
                data: echartData15
            },{
                type: 'pie',
                radius: '100%',
                clockwise: true,
                hoverAnimation: false,
                center: ['50%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, '10%'], //饼图的半径
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data: echartData15
            }],
        };
        // 16.p-genre饼图
        var echartData16= [{
            value: 26139,
            name: 'Horror'
        }, {
            value: 24838,
            name: 'Sci-fi'
        }, {
            value: 25022,
            name: 'Travel'
        }, {
            value: 23558,
            name: 'Sport'
        }, {
            value: 23009,
            name: 'Animation'
        }, {
            value: 22989,
            name: 'Documentary'
        }, {
            value: 20477,
            name: 'Art'
        }, {
            value: 20447,
            name: 'Musical'
        }, ]
        var rich16= {
            white: {
                color: "#fff",
                fontSize: 20 * scale,
                align: 'center',
            },
    
            black: {
                color: "#000",
                align: 'center',
                fontSize: 20 * scale,
    
            },
            gray: {
                color: '#d1d2d3',
                fontSize: 14 * scale,
                align: 'center',
                 padding: [5,0]
            }
        }
        var option16= {
            series: [{
                type: 'pie',
                clockwise: true, //饼图的扇区是否是顺时针排布
                radius: '100%',
                center: ['50%', '50%'], //饼图的中心（圆心）坐标
                radius: ['28%', '100%'], //饼图的半径
                hoverAnimation: false,
                color: ['#dd2457', '#6b707e', '#474b57'],
                label: {
                    normal: {
                        position: 'inner',
                        formatter: function (params, ticket, callback) {
                            var total = 0; //总数量
                            var percent = 0; //占比
                            echartData16.forEach(function (value, index, array) {
                                total += value.value;
                            });
                            percent = ((params.value / total) * 100).toFixed(1);
                            return '{black|' + percent + '%}\n{hr|}\n{white|' + params.name + '}\n{gray|' + params.value + '}';
                        },
                        
                        rich: rich16,
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    },
                },
                data: echartData16
            },{
                type: 'pie',
                radius: '100%',
                clockwise: true,
                hoverAnimation: false,
                center: ['50%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, '30%'], //饼图的半径
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data: echartData16
            }]
        };
    
        myChart14.setOption(option14);
        myChart15.setOption(option15);
        myChart16.setOption(option16);
        window.addEventListener("resize",function(){
            myChart14.resize();
            myChart15.resize();
            myChart16.resize();
        });
    });
    //end!