//start!
$(document).ready(function () {
    // 时间切换
    // -----1.day
    $(".day").click(function () {
        $(this).css("color", "#fff").siblings().css("color", "#ba3a52");

        // 1.1film-day
        // if ($(this).attr('id') === "film-day") {
        //     $("#sw-zhexian1").css("display", "none");

        // }
        //  else if ($(this).attr('id') === "film-week") {
        //     $("#sw-zhexian1").css("display", "none");  
        // }
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

    // 第三页------------地图定时切换

    var index1 = 0;
    var index2 = 0;

    var tab = $('.top>div'); // 导航栏   
    var b = $('.cir-b'); // 标数据

    function RunTab() {
        tab.removeClass('choose').eq(index1).addClass('choose');
        index1 = (index1 + 1) % tab.length;

        b.hide().eq(index2).show();
        index2 = (index2 + 1) % b.length;

        var _valueA = ['5569', '333428', '595756', '33234', '333428', '595756'];// 传参
        var _nameB = ['.top-AS', '.top-NA', '.top-SA', '.top-EU', '.top-AU', '.top-AF'];
        for (var i = 0; i < _nameB.length; i++) {
            $(_nameB[i]).html(_valueA[i]);
        };
    }

    RunTab();
    setInterval(RunTab, 2500);

    // 第四页------------宽度占比
    function userWidth() {
        var _valueA = ['27.3', '26.8', '23.4', '22.5'];// 传参
        var _nameA = ['.vive-focus-value', '.gear-vr-value', '.htc-vive-value', '.oculus-value'];
        for (var i = 0; i < _nameA.length; i++) {
            $(_nameA[i]).width(_valueA[i] + '%').html(_valueA[i] + '%');
        };
    }
    userWidth();

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
    // 排行定时切换
    var index = 0;
    var top = $(".topa");
    var index3 = 0;
    var cirD = $(".circle-data");

    function twoValue() {
        top.removeClass('choose').eq(index).addClass('choose');
        index = (index + 1) % top.length;
        cirD.hide().eq(index3).show();
        index3= (index3 + 1) % cirD.length;
       
    }
    twoValue();
    setInterval(twoValue, 2500);
    $(function(){
        $("span[class^='topa']").each(function(i) {
            $(this).html();
            $(this).attr('class');
            });
    
    });
    
});
//end!