//start!
$(document).ready(function () {
    
        var myChart = echarts.init(document.getElementById("p-duration"));   
        var scale = 1;
        var echartData = [{
            value: 8154,
            name: '<5min'
        }, {
            value: 3854,
            name: '5-10min'
        }, {
            value: 3515,
            name: '>10min'
        }, ]
        var rich = {
            total: {
                color: "#ffc72b",
                fontSize: 40 * scale,
                align: 'center'
            },
            black: {
                color: "#383a42",
                align: 'center',
                fontSize: 14 * scale,
                padding: [25, 0]
            },
            white: {
                color: '#fff',
                fontSize: 22 * scale,
                align: 'center'
            },
        
        }
        var option = {
            series: [{
                type: 'pie',
                radius: '100%',
                center: ['50%', '50%'],
                hoverAnimation: false,
                color: ['#dd2457', '#6b707e', '#474b57'],
                label: {
                    normal: {
                        show: true,
                        position: 'inner',
                        formatter: function(params, ticket, callback) {
                            var total = 0; //总数量
                            var percent = 0; //占比
                            echartData.forEach(function(value, index, array) {
                                total += value.value;
                            });
                            percent = ((params.value / total) * 100).toFixed(1);
                            return '{black|' + params.name + '}\n{white|' + percent + '%}';
                        },
                        rich: rich
                    },
                },
                data: echartData
            }]
        };
                      

    
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    });
    //end!