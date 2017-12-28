//start!
$(document).ready(function () {
    // 时间切换
    // -----1.day
    $(".day").click(function () {
        $(this).css("color", "#fff").siblings().css("color", "#ba3a52");

        // 1.1film-day
        if ($(this).attr('id') === "film-day") {
            $("#sw-zhexian1").css("display", "none");

        }
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

        var _valueA = ['5569', '333428', '595756', '33234', '333428', '595756'];
        var _nameB = ['.top-AS', '.top-NA', '.top-SA', '.top-EU', '.top-AU', '.top-AF'];
        for (var i = 0; i < _nameB.length; i++) {
            $(_nameB[i]).html(_valueA[i]);
        };
    }

    RunTab();
    setInterval(RunTab, 2500);

    // 第四页------------宽度占比
    function userWidth() {
        var _valueA = ['27.3', '26.8', '23.4', '22.5'];
        var _nameA = ['.vive-focus-value', '.gear-vr-value', '.htc-vive-value', '.oculus-value'];
        for (var i = 0; i < _nameA.length; i++) {
            $(_nameA[i]).width(_valueA[i] + '%').html(_valueA[i] + '%');
        };
    }
    userWidth();

    // 第一页------------城市选项卡
    function mapTab() {
        var _idA = ['#country', '#city', '#company'];
        var _idB = ['#country1', '#city1', '#company1'];
        var _idC = ['#country2', '#city2', '#company2'];
        var _idD = ['#country3', '#city3', '#company3'];

        var getHandler = function (index) {
            // 这儿出现了一个新的scope
            return function () {
                // console.log(index);
                for (var i = 0; i < _idA.length; i++) {
                    if (i != index){
                        $(_idA[i]).css("color", "#ba3a52");
                        $(_idB[i]).hide();
                        $(_idC[i]).hide();
                        $(_idD[i]).hide();
                    }
                    else{
                        $(_idA[i]).css("color", "#fff");
                        $(_idC[i]).show();
                        $(_idD[i]).show();
                        $(_idB[i]).show();
                    }
                }
            };
        };
        for (var i = 0; i < _idA.length; i++) {
            $(_idA[i]).click(getHandler(i));
        }
    }
    mapTab();

    // function setintervalTab() {
    //     var _cityValue = ['New York', 'Shanghai', 'Beijing', 'Toronto', 'Los Angeles','Los Angeles', 'New York','London', 'Beijing', 'Toronto'];
    //     var _topName = ['.top0','.top1', '.top2', '.top3', '.top4', '.top5','.top6', '.top7', '.top8', '.top9'];
    //     for (var i = 0; i < _topName.length; i++) {         
    //         $(_topName[i]).html(_cityValue[i]);         
    //     };

    // }
    // setintervalTab();
    // setInterval(setintervalTab, 2500);




});
//end!