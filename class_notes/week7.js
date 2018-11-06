/*var timeHolder =
document.querySelector("#time");

var date = new Date();
timeHolder.innerHTML = date;

date.getHours();
*/
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';

var r1 = ctx.fillRect(50, 50, 10, 150);
var r2 = ctx.fillRect(30, 10, 20, 100);
//var r3 =



function updateTime() {
        var timeHolder = document.querySelector("#timeConditionalHolder");

        var now = new Date();
        var time = now.toTimeString();

        //getSeconds();

        timeHolder.innerHTML = time;
        timeHolder.style.color= "red";

        if (now.getSeconds() < 20) {
            timeHolder.style.color = "red";
        } else if (now.getSeconds() < 40) {
            timeHolder.style.color = "blue";
        } else {
            timeHolder.style.color = "red";
        }
}

updateTime();

setInterval(updateTime, 1000);
