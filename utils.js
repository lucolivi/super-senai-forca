var curX = 0
var curY = 0
var curColor = '#fff'
const FONT_SIZE = 20

const YELLOW = '#FFFF00';
const WHITE = '#FFFFFF';
const GREEN = '#006400';

var curRandomInt = 0;

function randomize() {
    curRandomInt = Math.floor(Math.random() * 32767);
}

function rand() {
    return curRandomInt;
}

const keyCodeMapping = {
    40: 80,
    38: 72,
    32: 32
}

function getch() {
    return new Promise(resolve => {
        function handler(event) {
            document.removeEventListener('keydown', handler);

            if(event.keyCode in keyCodeMapping) {
                resolve(keyCodeMapping[event.keyCode]);
            } else {
                resolve(event.key);
            }
        }
        document.addEventListener('keydown', handler);
    });
}

function gotoxy(x, y) {
    curX = x*11 + 200
    
    curY = y*FONT_SIZE + 20
}

function clrscr(color = 'black') {
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}

function textcolor(color) {
    curColor = color;
}

function _printf(text, color) {

    ctx.save();
    ctx.font = `${FONT_SIZE}px Consolas, monospace`;
    ctx.fillStyle = color;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(text, curX, curY);
    ctx.restore();
}

function cprintf(text, value="") {

    text = text.replace("%c", value);

    _printf('█'.repeat(text.length), '#000') //Clear space before printing
    _printf(text, curColor)
}

function printf(text, value="") {

    text = text.replace("%c", value);

    _printf('█'.repeat(text.length), '#000') //Clear space before printing
    _printf(text, WHITE)
}

function sleep(seconds) {
    return delay(seconds * 1000);
}

function delay(miliseconds) {
    return new Promise(resolve => setTimeout(resolve, miliseconds));
}