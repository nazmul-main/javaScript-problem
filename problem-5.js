
function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "empty";
    }

    let sumOfChange = 0;
   
    for (let i = 0; i < changeArray.length; i++) {
        sumOfChange += changeArray[i];
    }
  
    if (sumOfChange >= totalDue) {
        return true;
    } else {
        return false;
    }   
}


console.log(canPay([1, 2, 5], 10)); 