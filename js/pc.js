//start!
$(document).ready(function () {
    
        var myChart = echarts.init(document.getElementById("pc"));
    
    
        var  option2= {
            
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)",
                            axisPointer: {
                                type: 'none'
                            }
                        },
                        series: [{
                                type: 'pie',
                                radius: '100%',
                                center: ['50%', '50%'],
                                data: [
                                    { value: 1055, name: 'Vive Focus' },
                                    { value: 310, name: 'DAPENG' },
                                    { value: 234, name: 'YISHI' },
                                    { value: 135, name: 'Pico' },
                                    { value: 248, name: 'TCL' },
                                    { value: 255, name: 'IQIYI VR' },
                                    { value: 310, name: 'Lenovo' },
                                    { value: 234, name: 'Oculus' },
                                    { value: 235, name: 'UGP' },
                                    { value: 435, name: 'others' }
                                ],
                                color:['#dd2457','#6b707e','#dd2457','#474b57','#6b707e','#dd2457','#474b57','#dd2457','#6b707e','#474b57'],
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            position: 'inner',
                                            formatter: '{d}%'
                                        },
                                        labelLine: {
                                            show: false
                                        }
                                    }
                                }
            
                            },
                        ],
                        animation: false
                    };
    
        myChart.setOption(option2);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    });
    //end!