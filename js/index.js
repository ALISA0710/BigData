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
    // -----5.country
    $(".country").click(function () {
        $(this).css("color", "#fff").siblings().css("color", "#ba3a52");
    });

    // -----6.city
    $(".city").click(function () {
        $(this).css("color", "#fff").siblings().css("color", "#ba3a52");
    });
    // -----7.company    
    $(".company").click(function () {
        $(this).css("color", "#fff").siblings().css("color", "#ba3a52");
    });
    // -----8.top-p    
    $(".top-p").click(function () {
        $(this).addClass('choose').siblings().removeClass('choose');
        // 8.3people.html----------------------地图切换
        if ($(this).attr('data-id') === "asia") {
            $("#asia").css("display", "block");
            $("#n-america").css("display", "none");
            $("#s-america").css("display", "none");
            $("#europe").css("display", "none");
            $("#australia").css("display", "none");
            $("#afirca").css("display", "none");
        } else if ($(this).attr('data-id') === "n-america") {
            $("#asia").css("display", "none");
            $("#n-america").css("display", "block");
            $("#s-america").csis("display", "none");
            $("#europe").css("display", "none");
            $("#australia").css("display", "none");
            $("#afirca").css("display", "none");
0        } else if ($(this).attr('data-id') === "s-america") {
            $("#asia").css("display", "none");
            $("#n-america").css("display", "none");
            $("#s-america").css("display", "block");
            $("#europe").css("display", "none");
            $("#australia").css("display", "none");
            $("#afirca").css("display", "none");
        } else if ($(this).attr('data-id') === "europe") {
            $("#asia").css("display", "none");
            $("#n-america").css("display", "none");
            $("#s-america").css("display", "none");
            $("#europe").css("display", "block");
            $("#australia").css("display", "none");
            $("#afirca").css("display", "none");
        } else if ($(this).attr('data-id') === "australia") {
            $("#asia").css("display", "none");
            $("#n-america").css("display", "none");
            $("#s-america").css("display", "none");
            $("#europe").css("display", "none");
            $("#australia").css("display", "block");
            $("#afirca").css("display", "none");
        } else if ($(this).attr('data-id') === "afirca") {
            $("#asia").css("display", "none");
            $("#n-america").css("display", "none");
            $("#s-america").css("display", "none");
            $("#europe").css("display", "none");
            $("#australia").css("display", "none");
            $("#afirca").css("display", "block");
        }

    });
});
//end!