// Code your solution in this file!
function distanceFromHqInBlocks(num){
    return Math.abs(num - 42) ;
}


function distanceFromHqInFeet(num1){
  return  distanceFromHqInBlocks(num1) * 264
}

function distanceTravelledInFeet(num2, num3){
    return Math.abs((num3 - num2) * 264) ;
}

function calculatesFarePrice(num2, num3){
    let d = distanceTravelledInFeet(num2, num3);
    if (d <= 400){
        return 0;
    }
    else if (400 < d && d <= 2000) {
        return d=(d - 400) * 0.02;
    }
    else if (2000 < d && d <= 2500) {
        return 25;
    }
    else  {
        return 'cannot travel that far';
    }
} 