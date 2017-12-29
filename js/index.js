//start!
$(document).ready(function () {
    // 时间切换
    // -----1.day
    $(".day").click(function () {
        $(this).css("color", "#fff").siblings().css("color", "#ba3a52");
    });
    // -----2.week
    $(".week").click(function () {
        $(this).css("color", "#fff").siblings().css("color", "#ba3a52");
    });

    // -----3.month
    $(".month").click(function () {
        $(this).css("color", "#fff").siblings().css("color", "#ba3a52");
    });
    // -----4.year    
    $(".year").click(function () {
        $(this).css("color", "#fff").siblings().css("color", "#ba3a52");
    });
    // -----5.country---city---company 

    // 第一页------------城市选项卡
    function mapTab() {
        var _idA = ['#country', '#city', '#company'];
        var _cityValue = [
            ['New York1', 'Shanghai', 'Beijing', 'Toronto1', 'Los Angeles', 'Los Angeles', 'New York', 'London1', 'Beijing', 'Toronto'],
            ['New York2', 'Shanghai', 'Beijing', 'Toronto2', 'Los Angeles', 'Los Angeles', 'New York', 'London2', 'Beijing', 'Toronto'],
            ['New York3', 'Shanghai', 'Beijing', 'Toronto3', 'Los Angeles', 'Los Angeles', 'New York', 'London3', 'Beijing', 'Toronto']
        ]; // 传参
        var _topName = ['.top0', '.top1', '.top2', '.top3', '.top4', '.top5', '.top6', '.top7', '.top8', '.top9'];
        var _idD = ['#mapA', '#mapB', '#mapC'];
        var getHandler = function (index) {
            // 这儿出现了一个新的scope
            return function () {
                // console.log(index);
                for (var i = 0; i < _idA.length; i++) {
                    // console.log(index);
                    for (var j = 0; j < _topName.length; j++) {
                        if (i != index) {
                            $(_idA[i]).css("color", "#ba3a52");
                            $(_idD[i]).hide();
                        } else {
                            $(_idA[i]).css("color", "#fff");
                            $(_topName[j]).html(_cityValue[i][j]);
                            $(_idD[i]).show();
                        }
                    }
                }
            };
        };
        for (var i = 0; i < _idA.length; i++) {
            $(_idA[i]).click(getHandler(i));
        }
    }
    mapTab();
    //----------排行定时切换--数据连接

    var index = 0;
    var top = $(".topa");
    var cirD = $(".circle-name");
    // 坐标名字
    var cirE = $(".circle-data");
    // 坐标块
    var cirF = $(".top-c");
    // 坐标数值
    var cirValueNum = ['5569', '333428', '595756', '33234', '333428', '595756',
        '5569', '333428', '595756', '33234', '333428', '595756',
        '5569', '333428', '595756', '33234', '333428', '595756',
        '5569', '333428', '595756', '33234', '333428', '595756',
        '5569', '333428', '595756', '33234', '333428', '595756',
        '5569', '333428', '595756', '33234', '333428', '595756'
    ]; // 传参
    function twoValue() {
        var current = top.eq(index);
        top.removeClass('choose').eq(index).addClass('choose');
        index = (index + 1) % top.length;
        var currentCityName = current.html();
        for (var i = 0; i < cirD.length; i++) {
            // 判断关联
            if (cirD.eq(i).html() == currentCityName) {
                cirE.eq(i).show();
                cirF.eq(i).html(cirValueNum[i]);
            } else {
                cirE.eq(i).hide();
            }
        }
    }
    twoValue();
    setInterval(twoValue, 2500);

    // 第三页------------地图定时切换

    var index1 = 0;
    var index2 = 0;

    var tab = $('.top-b'); // 导航栏   
    var b = $('.cir-b'); // 标数据

    function RunTab() {
        tab.removeClass('choose').eq(index1).addClass('choose');
        index1 = (index1 + 1) % tab.length;

        b.hide().eq(index2).show();
        index2 = (index2 + 1) % b.length;

        var _valueA = ['5569', '333428', '595756', '33234', '333428', '595756']; // 传参
        var _nameB = ['.top-AS', '.top-NA', '.top-SA', '.top-EU', '.top-AU', '.top-AF'];
        for (var i = 0; i < _nameB.length; i++) {
            $(_nameB[i]).html(_valueA[i]);
        };
    }

    RunTab();
    setInterval(RunTab, 2500);

    // 第四页------------宽度占比
    function userWidth() {
        var _valueA = ['27.3', '26.8', '23.4', '22.5']; // 传参
        var _nameA = ['.vive-focus-value', '.gear-vr-value', '.htc-vive-value', '.oculus-value'];
        for (var i = 0; i < _nameA.length; i++) {
            $(_nameA[i]).width(_valueA[i] + '%').html(_valueA[i] + '%');
        };
    }
    userWidth();
});
//end!