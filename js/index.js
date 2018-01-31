//start!
$(document).ready(function () {
    // 时间切换
    $(".film-charts-tab div").click(function () {
        $(this).css("color", "#fff").siblings().css("color", "#ba3a52");
    });

    // 第一页------------swiper
    function swiper() {
        var bigValue = 7.5; // 评分
        $('.big').html(bigValue);
        var forValue = 753345; //总数
        $('.for').html('(for ' + forValue + ')');
        var star = $('.star'); //星星
        var starValue = 3; //星星个数
        for (var i = 0; i < star.length; i++) {
            if (i < starValue) {
                star.eq(i).attr('src', "img/star.png"); //星星路径
            }
        }
        var filmName = ['START TREK III (2017)']; //名称
        $('#filmName').html(filmName);
        var filmTime = ['00:10:59']; //时间
        $('#filmTime').html(filmTime);
        var pct = ['.percent-value', '.percent-name', '.visit>.number', '.history>.number'];
        var pctNum = [
            ['50.89', '35.65'], //百分比
            ['Effective Viewing Rate234', 'Effective Viewing Rate789'], //注明
            ['3,567,589', '452,665'], //Vaild
            ['567,889', '33,256,999'], //Accumulated
        ];
        for (var i = 0; i < pct.length; i++) {
            // console.log(pct[i]);
            var className = $(pct[i]);
            // console.log(className);
            for (var j = 0; j < className.length; j++) {
                // console.log(className[j]);
                switch (i) {
                    case 0:
                        //   百分比 --------------------切割插取，                    
                        $(className[j]).html(pctNum[i][j] + '%'); //   执行代码块 0
                        break;
                    case 1:
                        //   注明 --------------------切割插取，                
                        $(className[j]).html(pctNum[i][j]); //   执行代码块 1
                        break;
                    case 2:
                        //   Vaild --------------------切割插取，
                        $(className[j]).html(pctNum[i][j]); //   执行代码块 2
                        break;
                    case 3:
                        //   Accumulated --------------------切割插取，
                        $(className[j]).html(pctNum[i][j]); //   执行代码块 3
                        break;
                }
            }
        }
    }
    swiper();
    // 第一页------------城市选项卡
    function mapTab() {
        var _idA = ['#country', '#city', '#company'];
        var _cityValue = [
            ['New York1', 'Shanghai', 'Beijing', 'Toronto1', 'Los Angeles', 'Los Angeles', 'New York', 'London1', 'Beijing', 'Toronto'],
            ['New York2', 'Shanghai', 'Beijing', 'Toronto2', 'Los Angeles', 'Los Angeles', 'New York', 'London2', 'Beijing', 'Toronto'],
            ['New York3', 'Shanghai', 'Beijing', 'Toronto3', 'Los Angeles', 'Los Angeles', 'New York', 'London3', 'Beijing', 'Toronto']
        ]; // 传参

        var _topA = $('.topa'); //排行
        var _idD = ['#mapA', '#mapB', '#mapC'];
        var getHandler = function (index) {
            // 这儿出现了一个新的scope
            return function () {
                // console.log(index);
                for (var i = 0; i < _idA.length; i++) {
                    // console.log(index);
                    for (var j = 0; j < _topA.length; j++) {
                        if (i !== index) {
                            $(_idA[i]).css("color", "#ba3a52");
                            $(_idD[i]).hide();
                        } else {
                            $(_idA[i]).css("color", "#fff");
                            _topA.eq(j).html(_cityValue[i][j]);
                            $(_idD[i]).show();
                        }
                    }
                }
            };
        };
        for (var i = 0; i < _idA.length; i++) {
            $(_idA[i]).click(getHandler(i));
            for (var j = 0; j < _topA.length; j++) {
                // 默认显示city排行
                _topA.eq(j).html(_cityValue[1][j]);
            }
        }
    }
    mapTab();
    //----------排行定时切换--数据连接

    var index = 0;
    var top = $(".topa");
    var cirD = $(".circle-name"); // 坐标名字
    var cirE = $(".circle-data"); // 坐标块
    var cirF = $(".top-c"); // 坐标数值
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
            if (cirD.eq(i).html() === currentCityName) {
                cirD.eq(i).addClass('bigBold');
                cirE.eq(i).show();
                cirF.eq(i).html(cirValueNum[i]);
            } else {
                cirD.eq(i).removeClass('bigBold');
                cirE.eq(i).hide();
            }
        }
    }
    twoValue();
    window.setInterval(twoValue, 2500);

    // 第二页------------
    function downLoad() {
        // tab-box
        // -----box-body
        var tabBox = $('.tabBox');
        var _tabBoxValue = [
            ['13%', 'Beijing1', '24,564,365', '25,785', '29,564,306'],
            ['14%', 'Beijing2', '34,564,365', '35,785', '39,564,306'],
            ['15%', 'Beijing3', '44,564,365', '45,785', '49,564,306'],
            ['16%', 'Beijing4', '54,564,365', '55,785', '59,564,306'],
            ['17%', 'Beijing5', '64,564,365', '65,785', '69,564,306'],
            ['18%', 'Beijing6', '74,564,365', '75,785', '79,564,306'],
        ]; // 传参

        for (var i = 0; i < _tabBoxValue.length; i++) {
            for (var j = 0; j < _tabBoxValue[i].length; j++) {
                tabBox.eq(i).children().eq(j).html(_tabBoxValue[i][j]);
            }
        }
        // -----box-total
        var total = $('.tab-total');
        var _totalValue = ['24,564,365', '25,785', '29,564,306']; // 传参
        for (var i = 0; i < total.length; i++) {
            total.eq(i).html(_totalValue[i]);
        }
        //topTen
        // -----daily-monthly
        var numA = $('.numA');
        var _numAValue = ['5,000,000', '600,000', '24,564,365', '25,785', '29,564,306', '32,323,232']; // 传参
        for (var i = 0; i < numA.length; i++) {
            numA.eq(i).html(_numAValue[i]);
        }
        //-----top-10
        var total = $('.facility-top-all');
        var _totalValue = [
            ['New York1', 'Shanghai', 'Beijing', 'Toronto1', 'Los Angeles', 'Los Angeles', 'New York', 'London1', 'Beijing', 'Toronto'],
            ['New York2', 'Shanghai', 'Beijing', 'Toronto2', 'Los Angeles', 'Los Angeles', 'New York', 'London2', 'Beijing', 'Toronto'],
            ['New York3', 'Shanghai', 'Beijing', 'Toronto3', 'Los Angeles', 'Los Angeles', 'New York', 'London3', 'Beijing', 'Toronto'],
        ]; // 传参
        for (var i = 0; i < _totalValue.length; i++) {
            for (var j = 0; j < _totalValue[i].length; j++) {
                total.eq(i).children().eq(j).html(j + 1 + " "+ _totalValue[i][j]);
            }
        }
    }
    downLoad();
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
        }
    }

    RunTab();
    
    window.setInterval(RunTab, 2500);
    // 第三页------------total number of users
    function numB() {
        // daily-monthly
        var numB = $('.numB');
        var _numBValue = ['36,775', '7,894,312']; // 传参
        for (var i = 0; i < numB.length; i++) {
            numB.eq(i).html(_numBValue[i]);
        }
    }
    numB();

    // 第四页------------数据效果
    function userWidth() {
        // 宽度占比
        var _valueA = ['27.3', '26.8', '23.4', '22.5']; // 传参
        var _nameA = ['.vive-focus-value', '.gear-vr-value', '.htc-vive-value', '.oculus-value'];
        for (var i = 0; i < _nameA.length; i++) {
            $(_nameA[i]).width(_valueA[i] + '%').html(_valueA[i] + '%');
        };
        // offline sales    1--today     2--total
        var numC = $('.numC');
        var _numCValue = ['36,775', '7,894,312']; // 传参
        for (var i = 0; i < numC.length; i++) {
            numC.eq(i).html(_numCValue[i]);
        }
    }
    userWidth();

    // loading......
    $('.loading').hide();
});
//end!