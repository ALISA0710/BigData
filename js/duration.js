//start!
$(document).ready(function () {

    var myChart = echarts.init(document.getElementById("duration"));
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
    var option = {
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
            data: echartData
        }],
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
});
//end!