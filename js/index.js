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
    $("#film-charts-map div").click(function () {
        $(this).css("color", "#fff").siblings().css("color", "#ba3a52");
        if ($(this).attr('data-id') === "country") {
            $(".quality").css("display", "none");
            $("#country1").css("display", "block");
            $(".number").css("display", "none");
            $("#country2").css("display", "block");
            $(".circle-all").css("display", "none");
            $("#country3").css("display", "block");
        } else if ($(this).attr('data-id') === "city") {
            $(".quality").css("display", "none");
            $("#city1").css("display", "block");
            $(".number").css("display", "none");
            $("#city2").css("display", "block");
            $(".circle-all").css("display", "none");
            $("#city3").css("display", "block");
        } else if ($(this).attr('data-id') === "company") {
            $(".quality").css("display", "none");
            $("#company1").css("display", "block");
            $(".number").css("display", "none");
            $("#company2").css("display", "block");
            $(".circle-all").css("display", "none");
            $("#company3").css("display", "block");
        }
    });
    // -----8.top-p    
    $(".top-p").click(function () {
        $(this).addClass('choose').siblings().removeClass('choose');
        // 8.3people.html----------------------地图切换
        if ($(this).attr('data-id') === "asia") {
            $(".circle-data").css("display", "none");
            $("#asia").css("display", "block");           
        } else if ($(this).attr('data-id') === "n-america") {
            $(".circle-data").css("display", "none");
            $("#n-america").css("display", "block");   
        } else if ($(this).attr('data-id') === "s-america") {
            $(".circle-data").css("display", "none");
            $("#s-america").css("display", "block");
        } else if ($(this).attr('data-id') === "europe") {
            $(".circle-data").css("display", "none");
            $("#europe").css("display", "block");;
        } else if ($(this).attr('data-id') === "australia") {
            $(".circle-data").css("display", "none");
            $("#australia").css("display", "block");
        } else if ($(this).attr('data-id') === "afirca") {
            $(".circle-data").css("display", "none");
            $("#afirca").css("display", "block");
        }
    });
});
//end!