//start!
$(document).ready(function () {

    var myChart = echarts.init(document.getElementById("p-genre"));


    var scale = 1;
    var echartData = [{
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
    }, ];
    var rich = {
        white: {
            color: "#fff",
            fontSize: 20 * scale,
            align: 'center',
            padding: [4, 1]
        },
    
        black: {
            color: "#000",
            align: 'center',
            fontSize: 20 * scale,
             padding: [2, 2]
    
        },
        gray: {
            color: '#d1d2d3',
            fontSize: 14 * scale,
            align: 'center',
             padding: [4, 100]
        }
    };
    var option = {
        series: [{
            type: 'pie',
            radius: '100%',
            center: ['50%', '50%'],
            hoverAnimation: false,
            color: ['#dd2457', '#6b707e', '#474b57'],
            label: {
                normal: {
                    position: 'inner',
                    formatter: function(params, ticket, callback) {
                        var total = 0; //总数量
                        var percent = 0; //占比
                        echartData.forEach(function(value, index, array) {
                            total += value.value;
                        });
                        percent = ((params.value / total) * 100).toFixed(1);
                        return '{black|' + percent + '%}\n{hr|}\n{white|' + params.name + '}\n{gray|' + params.value + '}';
                    },
                    rich: rich,
                },
            },
            data: echartData
        }]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
});
//end!