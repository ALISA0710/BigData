//start!
$(document).ready(function () {

    var myChart10 = echarts.init(document.getElementById("time-zhexian"));
    var myChart11 = echarts.init(document.getElementById("user-right"));
    var myChart12 = echarts.init(document.getElementById("duration"));
    var myChart13 = echarts.init(document.getElementById("genre"));


    // 10.time-zhexian折线图
    var value10 = [
        [18324, 6857, 3239, 9964, 2135, 1230, 3855, 2457, 3696, 15953, 12586, 40669, 22587],
        [10324, 6857, 3239, 5964, 2135, 7230, 3855, 2457, 3696, 18953, 12586, 40669, 22587],
        [5324, 6857, 3239, 964, 2135, 9230, 3855, 2457, 3696, 8953, 12586, 40669, 22587],
        [13324, 6857, 3239, 2964, 2135, 3230, 3855, 2457, 3696, 1953, 12586, 40669, 22587]
    ];
    var timeName = ['.day', '.week', '.month', '.year']
    var getTimeValue = function (i) {
        // 这儿出现了一个新的scope
        return function () {
            console.log(value10[i]);
            setOption10(value10[i]);
        };
    };
    for (var i = 0; i < timeName.length; i++) {
        $(timeName[i]).click(getTimeValue(i));
    }
    setOption10(value10[1]);
    var data11 = ['', 33, 30, 33, 30, 35, 32];
    function setOption10(_dataValue) {

        var option10 = {
            grid: {
                top: '5%',
                left: '0%',
                right: '2%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '0:00'],
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
                    data: _dataValue,
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
        myChart10.setOption(option10);
        window.addEventListener("resize", function () {
            myChart10.resize();
        });
    }
    // 11.user-right柱状图
    var option11 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function(params, ticket, callback) {
                console.log(params);
                var showHtm = "";
                var data9=['',12,18,25,30,15,8,9];
                 var data9Name=['','AGE', '<15', '15-20', '20-25', '25-30', '30-40', '>40'];
                for (var i = 0; i < data9.length; i++) {
                    //x轴名称
                    if(i>0){
                        var name = data9Name[i];
                        //值
                        var value = data9[i];
                        showHtm += name+ ' ：' + value + '%' + '<br>';
                    }
                   
                }
     
                return showHtm;
            }
        },
        grid: {
            top: '-10%',
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        yAxis: [{
            type: 'value',
            show: false,
            splitLine: {　　　　
                show: false　　
            }
        }],
        xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
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
    
        }],
        series: [{
            name: 'MEN',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: ['', 170, 240, 244, 200, 120, 230],
            itemStyle: {
                normal: {
                    color: '#b3b8c6'
                }
            },
        }, {
            name: 'WOMEN',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data: ['', 302, 341, 374, 390, 320, 420],
            itemStyle: {
                normal: {
                    color: '#dd2457'
                }
            },
        }, ]
    };
    // 12.duration饼图
    var scale = 1;
    var echartData12 = [{
        value: 8154,
        name: '<5min'
    }, {
        value: 3854,
        name: '5-10min'
    }, {
        value: 3515,
        name: '>10min'
    }, ]
    var rich12 = {
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
    var option12 = {
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
                    formatter: function (params, ticket, callback) {
                        var total = 0; //总数量
                        var percent = 0; //占比
                        echartData12.forEach(function (value, index, array) {
                            total += value.value;
                        });
                        percent = ((params.value / total) * 100).toFixed(1);
                        return '{black|' + params.name + '}\n{white|' + percent + '%}';
                    },
                    rich: rich12
                },
            },
            data: echartData12
        }, {
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
            data: echartData12
        }],
    };
    // 13.genre饼图
    var echartData13 = [{
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
    var rich13 = {
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
            padding: [5, 0]
        }
    }
    var option13 = {
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
                        echartData13.forEach(function (value, index, array) {
                            total += value.value;
                        });
                        percent = ((params.value / total) * 100).toFixed(1);
                        return '{black|' + percent + '%}\n{hr|}\n{white|' + params.name + '}\n{gray|' + params.value + '}';
                    },

                    rich: rich13,
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontWeight: 'bold'
                    }
                },
            },
            data: echartData13
        }, {
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
            data: echartData13
        }]
    };

    myChart11.setOption(option11);
    myChart12.setOption(option12);
    myChart13.setOption(option13);
    window.addEventListener("resize", function () {
        myChart11.resize();
        myChart12.resize();
        myChart13.resize();
    });
});
//end!