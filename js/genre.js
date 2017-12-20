//start!
$(document).ready(function () {

    var myChart = echarts.init(document.getElementById("genre"));


    var option2 = {
        tooltip: {
            formatter: "{b} : {c} ({d}%)",
            axisPointer: {
                type: 'none'
            }
        },
        series: [{
                type: 'pie',
                radius: '100%',
                center: ['50%', '50%'],
                data: [{
                        value: 1055,
                        name: '1'
                    },
                    {
                        value: 310,
                        name: '2'
                    },
                    {
                        value: 234,
                        name: '3'
                    },
                    {
                        value: 135,
                        name: '4'
                    },
                    {
                        value: 248,
                        name: '5'
                    },
                    {
                        value: 255,
                        name: '6'
                    },
                    {
                        value: 310,
                        name: '7'
                    },
                    {
                        value: 234,
                        name: '8'
                    },
                    {
                        value: 235,
                        name: '9'
                    },
                    {
                        value: 435,
                        name: '10'
                    }
                ],
                color: ['#dd2457', '#6b707e', '#dd2457', '#474b57', '#6b707e', '#dd2457', '#474b57', '#dd2457', '#6b707e', '#474b57'],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'inner',
                            formatter: '{b}',
                            fontSize: 30,
                            color: "#fff"
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }

            },

        ],
        animation: false
    };;

    myChart.setOption(option2);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
});
//end!