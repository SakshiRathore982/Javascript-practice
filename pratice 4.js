// movie theatre admittance
function theatre(age, supervised)
{
    return age >= 15 || supervised == true;
}
console.log(theatre(16, true));
console.log(theatre(14, false));

// use eval function 
function add(n, m)
{
    return n + m;
}
function eq(str)
{
    return eval(str);
}
console.log(eq("result=add(7,8)"));
console.log(eq("num=7+2/2"));

// concatenate first and last into one string
function concate(first, last)
{
    return `"${first},${last}"`;
}
console.log(concate("Salman", "khan"));
console.log(concate("Jiet", "Kaur"));

// On/Off Switches
function OnOff(switches)
{
    return Math.pow(2, switches);
}
console.log("Total Outcome :"+OnOff(2));
console.log("Total Outcome :" + OnOff(3));

// Triangle and Parallelogram Area Finder
function area(base, height, shape)
{
    if (shape == "triangle") {
        var a = 0.5 * parseInt(base) * parseInt(height);
    }
    else
        var a = base * height;
    return a;
}
console.log(`area of triangle(4,5)->${area(4, 5,"triangle")}`);
console.log(`area of parallelogram(8,9)->${area(8, 9, "parallelogram")}`);

// reverse the function 
function reverse(arr)
{
    var newone = [];
    var k = 0;
        for (let i = arr.length-1; i >= 0; i--)
    {
            newone[k] = arr[i];
            k++;
    }
    return newone;
}
console.log("reverse([3,5,8,9,14])->" + reverse([3, 5, 8, 9, 14]));

// destructing arrays
var arr = [1, 2, 3, 4, 5];
var [a, b,c] = arr;
console.log(a, b, c);

// practice of ternary operator
function ternary(value)
{
    return value ? "Yeah" : "Nope";
}
console.log(ternary(true));
console.log(ternary(false));

// convert the array into string 
function convert(arr)
{
    var str = "";
    for (let i = 0; i < arr.length; i++)
    {
    
        str = str + arr[i];
        }
    return str;
}
console.log(convert(["sak", "gfh", 4, 5]));

//return last ele of array 
function lastEle(arr)
{
    return arr[arr.length - 1];
}
console.log(lastEle([2, 4, 6, 8, 10]));

