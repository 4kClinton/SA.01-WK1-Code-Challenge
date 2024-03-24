

// declare speed
let speed = 100;

// Declare Speed Limit
const speedLimit = 70;

// Define Value of Demerit and how it works
const Demerit = Math.abs((speed - speedLimit)/5)

// add Conditions 
if (speed <=70){
    console.log("OK");
}
else if(Demerit>12){
    console.log("License Suspended");
}
else if (speed > 70) {
    console.log("Demerit" +Demerit);
}