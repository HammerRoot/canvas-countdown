var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var RADIUS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;

const endTime = new Date('2020-09-05 23:18:56');

window.onload = function() {

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    var curShowTimeSeconds = getCurrentShowTimeSeconds();
    render(context, curShowTimeSeconds);
}

function getCurrentShowTimeSeconds() {
    var curTime = new Date();
    var ret = endTime.getTime() - curTime.getTime();
    ret = Math.round(ret / 1000);
    return Math.max(0, ret);
}

function render(cxt, curShowTimeSeconds) {

    var hours = parseInt(curShowTimeSeconds / 3600, 10);
    var minutes = parseInt((curShowTimeSeconds - hours * 3600) / 60, 10);
    var seconds = curShowTimeSeconds % 60;

    renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours/10), cxt, '#0f4c75');
    renderDigit(MARGIN_LEFT + 15*(RADIUS+1), MARGIN_TOP, parseInt(hours%10), cxt, '#0f4c75');
    renderDigit(MARGIN_LEFT + 30*(RADIUS + 1), MARGIN_TOP, 10, cxt, '#fdcb9e');
    renderDigit(MARGIN_LEFT + 39*(RADIUS+1), MARGIN_TOP, parseInt(minutes/10), cxt, '#00b7c2');
    renderDigit(MARGIN_LEFT + 54*(RADIUS+1), MARGIN_TOP, parseInt(minutes%10), cxt, '#00b7c2');
    renderDigit(MARGIN_LEFT + 69*(RADIUS+1), MARGIN_TOP, 10 , cxt, '#fdcb9e');
    renderDigit(MARGIN_LEFT + 78*(RADIUS+1), MARGIN_TOP, parseInt(seconds/10), cxt, '#1b262c');
    renderDigit(MARGIN_LEFT + 93*(RADIUS+1), MARGIN_TOP, parseInt(seconds%10), cxt, '#1b262c');
}

function renderDigit(x , y, num, cxt, color) {

    cxt.fillStyle = color;

    for (var i = 0; i < DIGIT[num].length; i++) {
        for (var j = 0; j < DIGIT[num][i].length; j++) {
            if (DIGIT[num][i][j] === 1) {
                cxt.beginPath();
                cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1), y+i*2*(RADIUS+1)+(RADIUS+1), RADIUS, 0, 2*Math.PI);
                cxt.closePath();

                cxt.fill();
            }
        }
    }
}

