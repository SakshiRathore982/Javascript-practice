// square of program
function square(n)
{
    let sq = Math.pow(n, 2);
    return `Square(${n}) -> ${sq}`;
}
console.log(square(5));
console.log(square(100));
console.log(square(9));

// using && check the enter both value is true or false if either of one is false then 
// return false else true
function andfun(a, b) {
    if (a == true && b == true)
        return true;
    else
        return false;
}
console.log(`andfun(${true} , ${false}) -> ${andfun(true, false)}`);
console.log(`andfun(${true} , ${true}) -> ${andfun(true, true)}`);

// if number is less 0 then return true else false
function smallerthan0(n)
{
    return n <= 0;
}
console.log(`-2 smaller than 0 -> ${smallerthan0(-2)}`);
console.log(`10 smaller than 0 -> ${smallerthan0(10)}`);
console.log(`0 smaller than equal to 0 -> ${smallerthan0(0)}`);

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function sumlessthan0(n, m)  
{
    return (n + m) <= 100;
}
console.log(sumlessthan0(10, 20));
console.log(sumlessthan0(10, 200));

//  Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far. A win receives 3 points, a draw 1 point and a loss 0 points.
function football(win, draw, loss)
{
    var point = win * 3 + draw;
    return point;
}
console.log(`total points in football ${football(4, 1, 2)}`);

//function which create equality 
function equality(n, m)
{
    return n == m;
}
console.log(`equality(4,6) -> ${equality(4, 6)}`);

console.log(`equality(6,6) -> ${equality(6, 6)}`);

// 
function totalleg(chicken, cow, pig)
{
    let total = chicken * 2 + cow * 4 + pig * 4;
    return `totalleg(${chicken}, ${cow}, ${pig}) -> ${total}`;
}
console.log(totalleg(2, 3, 5));
console.log(totalleg(5, 2, 8));

// convert the hours and minute into second 
function convert(hrs, mins)
{
    let sec = hrs * 3600 + mins * 60;
    return `convert(${hrs},${mins})-> ${sec}`;
}
console.log(convert(5, 45));
console.log(convert(2, 30));





