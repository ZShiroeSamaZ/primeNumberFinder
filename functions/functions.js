function init() {
    while (1) {
        var num = prompt("Enter your Number")
        num = parseInt(num)
        if (Number.isInteger(num) && num > 0) break
    }
    
    alert(`For n = ${num} prime number are ${printPrime(num)}`)
}

function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}


function printPrime(n) {
    var arr = [2];
    if (n < 2) return "[ ]"
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    return arr
}