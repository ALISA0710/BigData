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
    //     var index=0;
    //     var top=$('.circle-data');

    //     function run(){
    //         top.hide();
    //         top.eq(index).show();
    //         index=(index+1)%top.length;
    //     }

    //     run();
    //     setInterval(run,2500);
    // });
    // 第三页------------地图定时切换
    $(function () {
        var index1=0;
        var index2=0;
        var continent=$('.top-a');
        var b=$('.cir-b');

        function con(){
            continent.removeClass('choose');
            continent.eq(index1).addClass('choose');
            index1=(index1+1)%continent.length;
            b.hide();
            b.eq(index2).show();
            index2=(index2+1)%b.length;
        }
        con();
        setInterval(con,2500);
    });

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