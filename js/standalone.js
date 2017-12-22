//start!
$(document).ready(function () {

    var myChart = echarts.init(document.getElementById("standalone"));


    var data = [{
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
    
    var option2 = {
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
            data: data
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
            data: data
        }],
        animation:false
    };
    myChart.setOption(option2);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
});
//end!