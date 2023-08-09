
function sortMaker(arr) {
    if (!Array.isArray(arr) ||arr.length !== 2 ) {
        return "Plsease provide an array  with Positive number";
    }

    else if( typeof arr[0] !== 'number' || typeof arr[1] !== 'number' ){
        return "plase provide a number"
    }

    else if( arr[1] <= 0 || arr[0] <= 0 ){
        return 'Invalid Input'
    }
    
    else if ( arr[0] === arr[1] ) {
        return "equal";
    }
    else{
        const result = [Math.max(...arr), Math.min(...arr)];
        return result;
    }
    }
    
    
    console.log(sortMaker([-3, -5]));