/*
2018-8-16 wujy
功能：
用于显示日历和时钟
一旦时钟为0时0分0秒时更换日期
点击时钟可实现启动或暂停时钟

后期：
添加闹钟功能
*/

function showDate() {
    var year = document.getElementsByClassName('year')[0];
    var day = document.getElementsByClassName('day')[0];
    var clock = document.getElementsByClassName('clock')[0];
    //为日期加计时器
    function calendarCom() {
        var date = new Date();
        var fullYear = date.getFullYear();
        var dateDay = (date.getMonth() + 1) + "月" + date.getDate() + "日";
        year.innerHTML = fullYear;
        day.innerHTML = dateDay;
        // console.log('我应该出现1次');

        // return calendar;
    }
    calendarCom();
    var calendar = setInterval(function() {
        calendarCom();
    }, 1000 * 60);
    var calendar = calendarCom();
    //为时钟加计时器
    var clock1 = setInterval(function() {
        var date = new Date();
        var time = date.getHours() + "时" + date.getMinutes() + "分" + date.getSeconds() + "秒";
        clock.innerHTML = time;
        if (time == "8时21分40秒") {
            clearInterval(calendar);
            calendarCom();
            calendar = setInterval(function() {
                calendarCom();
            }, 1000 * 60);
            console.log('我被执行了，我只能出现1次');
        }
    }, 1000);
    //当点击时启动或停止
    clock.onclick = function() {
        console.log('点击了吗？');
        if (clock1) {
            clearInterval(clock1);
            console.log('stop');
            clock1 = 0;
        } else {
            console.log('strat');
            clock1 = setInterval(function() {
                var date = new Date();
                var time = date.getHours() + "时" + date.getMinutes() + "分" + date.getSeconds() + "秒";
                clock.innerHTML = time;
            }, 1000);
        }
    }
}


showDate();