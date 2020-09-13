//Task 01 - 
function isPrime(number) {

    if (number < 2) {
        return false;
    }

    for (let i=0; i<number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}


let  primeInRange = function(minRange, maxRange){

    if(maxRange === undefined){
        maxRange = minRange;
        minRange = 2;
    }

    let result=[]; //an empty list

    for(let number=minRange; number<maxRange; number++)
        if (isPrime(number))
            result.push(number);

    return result;
}