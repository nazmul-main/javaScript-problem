 // Problem - 1
function cubeNumber(number) {

    if(typeof number !== 'number'){
        return "Please enter a number first"
    }

    else if(number <= 0) {
        return 'Must be a positive Number'
    }

    const result = number ** 3;
    return result
}

console.log(cubeNumber(3));
console.log(cubeNumber(4));
