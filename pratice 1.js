// addition of two  number
function add(n, m) {
    return parseInt(n) + parseInt(m);
}
var n, m;
n = 5;
m = '6';
console.log(add(n, m));
n = 4.0;
m = 9;
console.log(add(n, m));
// convert the number into 60 multiple
function convert(n)
{
    return Number(n) * 60;
}
console.log(convert('3'));
// Increment program (takes input in any form and gave output)
function increment(n)
{
    return parseInt(n) + 1;
}
var n = -3;
console.log("program 3:")
console.log(increment(n));
console.log(increment(0));
console.log(increment('9'));

// add something at begining of any string

function gavemesomething(n)
{
    return "something " + n;
}
console.log(gavemesomething("is better than nothing"));
console.log(gavemesomething("Bob jane"));
console.log(gavemesomething("is nothing"));

// Area of triangle

function TriangleArea(n, m)
{
    let area = 0.5 * n * m;
    return area;
}
var n = 3;
var m = 8;
console.log(`area of triangle ${TriangleArea(n, m)}`);
console.log(`area of triangle ${TriangleArea('10', 6)}`);

// convert the hours into seconds
function convertHintoS(n)
{
    return parseInt(n) * 60 * 60;
}
var N = 2;
var m = 10;
var p = 24;
console.log(`${N}hours = ${convertHintoS(N)} mins`);
console.log(`${m}hours = ${convertHintoS(m)} mins`);
console.log(`${p}hours = ${convertHintoS(p)} mins`);

// return the first element of array
function getFirstEle(l)
{
    if (Array.isArray(l) && l.length != 0)
        return l[0];
    else
        return "not exist";
}
console.log(`[1, 2, 3, 4] ->${getFirstEle([1, 2, 3, 4])}`);
console.log(`${getFirstEle()}`);
console.log(`[-500,0,50] ->${getFirstEle([-500,0,50])}`);

// find the perimeter of Rectangle
function PerimeterRectangle(l, b)
{
    let per = 2 * (parseInt(l) + parseInt(b));
    return `perimter of rect(${l},${b}) -> ${per}`;
}
console.log(PerimeterRectangle(5, 6));
console.log(PerimeterRectangle(5, 10));
console.log(PerimeterRectangle(2, 9));

