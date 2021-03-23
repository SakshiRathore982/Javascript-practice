// measure profit 
function profittable(prob, prize, pay)
{
    return prob * prize > pay;
}
console.log(`profittable(${0.2},${50},${9}) ->${profittable(0.2,50,9)} `);
console.log(`profittable(${0.2},${50},${9}) -> ${profittable(0.9, 1, 2)}`);

//frames per second
function frames(f1, f2)
{
    return f1 * f2 * 60;
}
console.log(frames(1, 1));
console.log(frames(10, 1));

// A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
//     Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
function serving(age, session)
{
    if (age > 18 && session != true) {
        return `you can serve `;
    }
    else
        return `you can't serve`;
}
console.log(serving(32, true));
console.log(serving(19, false));

// function return true if string is empty and false 
function isempty(str)
{
    if (str.length > 0) {
        return false
    }
    else return true;
}
console.log(" !!!   ")
console.log(isempty(""));
console.log(isempty("  "));
console.log(isempty("a"));

//compare the string by count of character 
function compare(str1, str2)
{
    if (str1.length == str2.length)
        return true;
    else
        return false;
}
console.log(compare("sak", "das"));
console.log(compare("saks", "dassh"));

// check divisibility of 100
function check(num)
{
    return num % 100==0;
}
console.log("!!!")
console.log(check(700));
console.log(check(29));


// function return length of string
function len(str)
{
    if (str) {
        return len(str.substring(1))+1;
    }
    else
        return 0;
}
var str = "tiptip";
console.log(len(str));

//return string as an integer
function integer(n)
{
    return Number(n);
}
console.log(integer("45"));
console.log(integer("50"));
