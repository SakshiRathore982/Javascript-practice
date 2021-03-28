// ----1----- count space in string /line
function count(str)
{
    var cnt=0;
    for (let i = 0; i < str.length; i++)
    {
        if (str[i] == " ")
        {
            cnt++;
        }
    }
    return cnt;
}
console.log(count("dash dash sahdh"));
console.log(count("kcjdsfhdkcds"));
console.log(count("   "));

// function 
function Numberargument(...array)
{
    //console.log(arguments.length);
    return array.length;
}
console.log("----------------------------");
console.log(Numberargument(1, 2, 3, 4, 5));
console.log(Numberargument('3', '4', '6', '7'));

// function object !!
function cityfacts(city)
{
    return `${city.name} has a population of ${city.popu} and is situated in ${city.continent}.`;
}
console.log("--------------------------");
console.log(cityfacts({ name: "paris", popu: "2,140,526", continent: "Europe" }));
console.log(cityfacts({ name: "jodhpur", popu: "2,02,140,526", continent: "Asia" }));

// function volume of box
function volume(vol)
{
    var ans = vol.width * vol.height * vol.length;
    return ans;
}
console.log("------------------------------");
console.log(`volume of given measurement box :${volume({ width: 3, height: 5, length: 1 })}`);
console.log(`volume of given measurement box :${volume({ width: 5, height: 8, length: 3 })}`);

// stuttering function 
function stuttering(str)
{
    return `${str.substring(0, 2)}... ${str.substring(0, 2)}...${str}? `;
}
console.log("-------------------------------");
console.log(stuttering("sakshi"));
console.log(stuttering("incredible"));

// function for identifing plural and singular
function plural(str)
{
    if (str[str.length-1]=="s")
        return `${str} is plural`;
    else
        return `${str} is singular`;
}
console.log("-----------------------------");
console.log(plural("books"));
console.log(plural("kite"));
console.log(plural("boys"));

// function to calculate 
function carNeeded(n)
{
    if (n == 0)
        return 0;
    else 
        var ans = parseInt(n / 5) + n % 5;
    return ans;
}
console.log("---------------------------");
console.log(`carNeeded(5) -> ${carNeeded(5)}`);
console.log(`carNeeded(11)-> ${carNeeded(11)}`);

// function 
const ar = ["sak", "dash", "hudd"];
let [, dash,] = ar;
console.log(dash);