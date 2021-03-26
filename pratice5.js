// flip the boolean
function flip(bool) {
    return !bool;
}
console.log(flip(true));
console.log(flip(0));

//kinetic energy 
function kinetic(mass, velocity)
{
    return parseInt(0.5 * mass * (Math.pow(velocity, 2)));
}
console.log(`$Kinetic energy -> ${kinetic(14, 5)}`);
console.log(`$Kinetic energy -> ${kinetic(20, 7)}`);
console.log(`$Kinetic energy -> ${kinetic(63.5, 7.35)}`);

// arrow function 
name = (greet) => { return `Good Morning ${greet} !` }
console.log(name("Ram "));
console.log(name("Sita"));
 
// exponent of given base 
function power(base, expo)
{
    return Math.pow(base, expo);
}
console.log(power(3, 4));
console.log(power(2, 4));

// word without first character
function first(str)
{
    return str.substring(1);
}
console.log(first("sakshi"));

// concatenating the integer array
function concat(arr1, arr2)
{
    var newarr = arr1 + arr2;
    return [...arr1,...arr2];
}
console.log("----46----")
console.log(concat([2, 3, 4], [5, 7, 1]));

// function find element 
function search(arr, ele)
{
    var found = 0;
    for (i = 0; i < arr.length; i++)
    {
        if (arr[i] == ele)
        {
            found = 1;
            return i + 1;
            }
    }
    if (found == 0)
    {
        return -1;
        }
}
console.log("---47---");
console.log(search([2, 4, 6, 7, 1, 9, 10], 7));
console.log(search([2, 4, 1, 5, 6, 7, 12], 10));

// 48 question 
function searchfunction(arr, ele)
{
    var element = arr.includes(ele);
    var index = arr.indexOf(ele)+1;
    return `${element} , indexOf(${ele}) -> ${index}`;
}
console.log(searchfunction([4, 5, 2, 9, 1, 10], 10));