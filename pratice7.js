console.log("------------------------------------")
const stu = { name: "sakshi", rollno: "45", sub: "CSE" }
var { name, rollno, sub ,phone} = stu
console.log(name, rollno, phone)

// function that takes in current mood and create the sentence
function mood(str)
{
    if (!str)
        return `Today , I am Feeling neutral`
    else
        return `Today , I am Feeling ${str}`
}
console.log(mood())
console.log(mood("happy"))
 
// similar bread
function hassamebread(list1, list2) {
    if (list1[0] == list2[0] && list2[list2.length - 1] == list1[list1.length - 1])
        return true;
    else
        return false;
}
console.log("--------------------------")
console.log(hassamebread(["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]))
console.log(hassamebread(["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"]))

// shapes with n sides
function shape(n)
{
    switch (n)
    {
        case 1: return "circle"
        case 2: return "semi-circle"
        case 3: return "triangle"
        case 4: return "square"
        case 5: return "pentagon"
        case 6: return "hexagon"
        case 7: return "heptagon"
        case 8: return "octagon"
        case 9: return "nonagon"
        case 10: return "decagon"
    }
}

console.log("---------------------------------")
console.log(shape(3))
console.log(shape(10))
console.log(shape(1))

// function with array with multiply of 2

function getmultiplied(arr)
{
    for (let i = 0; i < arr.length; i++)
        arr[i]=arr[i]*2
    return arr;
}
console.log("------------------------------------")
console.log(getmultiplied([2, 4, 8]))

// function that return "burp"
function Burp(n)
{
    return `Bu${"r".repeat(n)}p`
}
console.log("--------------------------------------")
console.log(Burp(3))
console.log(Burp(7))

// function 
var { name, email,...rest } = { name: "carry", email: "carry@example.com",city: "ajmer", state: "Rajasthan", country: "india" }
console.log("--------------------------------------")
console.log(rest.city)
console.log(rest)
console.log(name)

// ASCII VALUE
function ctoa(str)
{
    return str.charCodeAt()
}
console.log("------------------------------------------")
console.log(ctoa("A"))
console.log(ctoa("{"))

//
function totalcup(n)
{
    return n + Math.floor(n / 6);
}
console.log("--------------------------------------------")
console.log(totalcup(7))
console.log(totalcup(12))
console.log(totalcup(213))