// Code your solution in this file!
let pickupLocation;
let result;
function distanceFromHqInBlocks(num){
    result = Math.abs(num - 42)
    return result;
}
function distanceFromHqInFeet(num){
    result = distanceFromHqInBlocks(num);
    return result * 264
}
let travelledInFeet;
function distanceTravelledInFeet(a,b){
    travelledInFeet =  Math.abs(((b-a)*264))
    return travelledInFeet;
}
let fare;
function calculatesFarePrice(a,b){  
    distanceTravelledInFeet(a,b);
         if(travelledInFeet <=400){
             fare = 0
             return fare;
        }
        else if(travelledInFeet > 400 && travelledInFeet < 2000){
             fare = (travelledInFeet-400) * 0.02
             return fare;
        }
        else if(travelledInFeet > 2000 && travelledInFeet < 2500){
            fare = 25;
            return fare;
        }
        else {
            fare = 'cannot travel that far'
            return fare;
        }
}