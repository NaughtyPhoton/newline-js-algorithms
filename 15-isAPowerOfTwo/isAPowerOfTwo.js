// Given a positive integer,
// write a function to find if it is a power of two or not.

function isAPowerOfTwo(number) {
    if (number < 1) return false;

    let dividedNumber = number;
    while (dividedNumber !== 1) {
        if (dividedNumber % 2 !== 0) return false;
        dividedNumber /= 2;
    }
    return true;
}

function isAPowerOfTwoBitwise(number) {
    if (number < 1) return false;
    return (number & (number - 1)) === 0;
}



isAPowerOfTwo()
isAPowerOfTwoBitwise()
