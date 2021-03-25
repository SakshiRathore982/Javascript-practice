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

