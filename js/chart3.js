//start!
$(document).ready(function () {

    var myChart9 = echarts.init(document.getElementById("user"));
    var data90 = ['', 33, 30, 33, 30, 35, 32];
    var data90Men =['', 332, 301, 334, 390, 330, 320];
    var data90Women =['', 132, 101, 134, 90, 230, 210] ;
    setOption9();
    // for (var i = 0; i < data90.length; i++) {
    //     // console.log(data90[i]);
    //     var dataPercent = data90[i];
    //     setOption9(dataPercent);
    //     console.log(dataPercent);
    // }

    // 9.user柱状图
    function setOption9() {
        var option9 = {
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

        myChart9.setOption(option9);
        window.addEventListener("resize", function () {
            myChart9.resize();
        });
    }
});
//end!