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
        tab.removeClass('choose');
        tab.eq(index1).addClass('choose');
        index1 = (index1 + 1) % tab.length;

        b.hide();
        b.eq(index2).show();
        index2 = (index2 + 1) % b.length;
    }

    RunTab();
    setInterval(RunTab, 2500);
    // 第四页------------宽度占比
    // $('.vive-focus-value').width('25%');
    // $('.gear-vr-value').width('35%');
    // $('.htc-vive-value').width('20%');
    // $('.oculus-value').width('20%');
    
    

    
    function userWidth() {
        var _valueA = ['10', '20', '30', '40'];
        var user = $('.user-box-percent>div');
        for(var i = 0;i <_valueA.length; i++) {
            // console.log(content);
			for(var j = 0; j <user.length; j++) {    
                user[j].textContent= _valueA[i]+"%";
                // user[1].textContent= _valueA[1]+"%";
                // user[2].textContent= _valueA[2]+"%";
                // user[3].textContent= _valueA[3]+"%";
                console.log(user[i].width);
			}
		}
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