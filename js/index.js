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
    // $(function () {
    //     var index1=0;
    //     var index2=0;
    //     // 导航栏
    //     var cona=$('.top-a');
    //     // 标数据
    //     var a=$('.cir-a');

    //     function run(){
    //         cona.removeClass('choose');
    //         cona.eq(index1).addClass('choose');
    //         index1=(index1+1)%cona.length;
    //         a.hide();
    //         a.eq(index2).show();
    //         index2=(index2+1)%a.length;
    //     }

    //     run();
    //     setInterval(run,2500);
    // });
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
        var _valueB = ['5569', '333428', '595756', '33234','333428', '595756'];
        var _nameB = ['.top-AS', '.top-NA', '.top-SA', '.top-EU', '.top-AU', '.top-AF'];
        for (var i = 0; i < _nameB.length; i++) {
            $(_nameB[i]).html(_valueB[i]);
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

    $("#film-charts-map div").click(function () {
        $(this).css("color", "#fff").siblings().css("color", "#ba3a52");
        if ($(this).attr('data-id') === "country") {
            $(".quality").css("display", "none");
            $("#country1").css("display", "block");
            $(".num").css("display", "none");
            $("#country2").css("display", "block");
            $(".circle-all").css("display", "none");
            $("#country3").css("display", "block");
        } else if ($(this).attr('data-id') === "city") {
            $(".quality").css("display", "none");
            $("#city1").css("display", "block");
            $(".num").css("display", "none");
            $("#city2").css("display", "block");
            $(".circle-all").css("display", "none");
            $("#city3").css("display", "block");
        } else if ($(this).attr('data-id') === "company") {
            $(".quality").css("display", "none");
            $("#company1").css("display", "block");
            $(".num").css("display", "none");
            $("#company2").css("display", "block");
            $(".circle-all").css("display", "none");
            $("#company3").css("display", "block");
        }
    });

});
//end!