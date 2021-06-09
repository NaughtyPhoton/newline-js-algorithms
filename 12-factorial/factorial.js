function factorialRecursive(number) {
    return number > 1 ? number * factorialRecursive(number - 1) : 1;
}


function factorial(number) {
    let result = 1;
    for (let i = 2; i < number; i++) {
        result *= i;
    }
    return result;
}



factorial()
