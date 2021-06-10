function isPrime(n, current = 2) {
    if (!Number.isInteger(n) || n <= 1) return false;
    if (current > Math.sqrt(n)) return true;
    if (Number.isInteger(n / current)) return false;
    return isPrime(n, current + 1);
}

const logIsPrime = (_, n) => console.log(`${n}: ${isPrime(n)}`);

const range = Array(30).fill(0).map(logIsPrime);
