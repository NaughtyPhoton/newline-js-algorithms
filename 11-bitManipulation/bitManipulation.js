/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */
function getBit(number, bitPosition) {
    return (number >> bitPosition) & 1;
}

/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */
function setBit(number, bitPosition) {
    return number | (1 << bitPosition);
}

/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */
function clearBit(number, bitPosition) {
    const mask = ~(1 << bitPosition);

    return number & mask;
}

/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @param {number} bitValue - 0 or 1.
 * @return {number}
 */
function updateBit(number, bitPosition, bitValue) {
    // Normalized bit value.
    const bitValueNormalized = bitValue ? 1 : 0;

    // Init clear mask.
    const clearMask = ~(1 << bitPosition);

    // Clear bit value and then set it up to required value.
    return (number & clearMask) | (bitValueNormalized << bitPosition);
}

/**
 * @param {number} number
 * @return {boolean}
 */
function isEven(number) {
    return (number & 1) === 0;
}

/**
 * @param {number} number - 32-bit integer.
 * @return {boolean}
 */
function isPositive(number) {
    // Zero is neither a positive nor a negative number.
    if (number === 0) {
        return false;
    }

    // The most significant 32nd bit can be used to determine whether the number is positive.
    return ((number >> 31) & 1) === 0;
}

/**
 * @param {number} number
 * @return {number}
 */
function multiplyByTwo(number) {
    return number << 1;
}

/**
 * @param {number} number
 * @return {number}
 */
function divideByTwo(number) {
    return number >> 1;
}

/**
 * Switch the sign of the number using "Twos Complement" approach.
 * @param {number} number
 * @return {number}
 */
function switchSign(number) {
    return ~number + 1;
}

/**
 * Multiply two signed numbers using bitwise operations.
 *
 * If a is zero or b is zero or if both a and b are zeros:
 * multiply(a, b) = 0
 *
 * If b is even:
 * multiply(a, b) = multiply(2a, b/2)
 *
 * If b is odd and b is positive:
 * multiply(a, b) = multiply(2a, (b-1)/2) + a
 *
 * If b is odd and b is negative:
 * multiply(a, b) = multiply(2a, (b+1)/2) - a
 *
 * Time complexity: O(log b)
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function multiply(a, b) {
    // If a is zero or b is zero or if both a and b are zeros then the production is also zero.
    if (b === 0 || a === 0) {
        return 0;
    }

    // Otherwise we will have four different cases that are described above.
    const multiplyByOddPositive = () => multiply(multiplyByTwo(a), divideByTwo(b - 1)) + a;
    const multiplyByOddNegative = () => multiply(multiplyByTwo(a), divideByTwo(b + 1)) - a;

    const multiplyByEven = () => multiply(multiplyByTwo(a), divideByTwo(b));
    const multiplyByOdd = () => (isPositive(b) ? multiplyByOddPositive() : multiplyByOddNegative());

    return isEven(b) ? multiplyByEven() : multiplyByOdd();
}


/**
 * Multiply to unsigned numbers using bitwise operator.
 *
 * The main idea of bitwise multiplication is that every number may be split
 * to the sum of powers of two:
 *
 * I.e. 19 = 2^4 + 2^1 + 2^0
 *
 * Then multiplying number x by 19 is equivalent of:
 *
 * x * 19 = x * 2^4 + x * 2^1 + x * 2^0
 *
 * Now we need to remember that (x * 2^4) is equivalent of shifting x left by 4 bits (x << 4).
 *
 * @param {number} number1
 * @param {number} number2
 * @return {number}
 */
function multiplyUnsigned(number1, number2) {
    let result = 0;

    // Let's treat number2 as a multiplier for the number1.
    let multiplier = number2;

    // Multiplier current bit index.
    let bitIndex = 0;

    // Go through all bits of number2.
    while (multiplier !== 0) {
        // Check if current multiplier bit is set.
        if (multiplier & 1) {
            // In case if multiplier's bit at position bitIndex is set
            // it would mean that we need to multiply number1 by the power
            // of bit with index bitIndex and then add it to the result.
            result += (number1 << bitIndex);
        }

        bitIndex += 1;
        multiplier >>= 1;
    }

    return result;
}

/**
 * @param {number} originalNumber
 * @return {number}
 */
function countSetBits(originalNumber) {
    let setBitsCount = 0;
    let number = originalNumber;

    while (number) {
        // Add last bit of the number to the sum of set bits.
        setBitsCount += number & 1;

        // Shift number right by one bit to investigate other bits.
        number >>= 1;
    }

    return setBitsCount;
}

/**
 * Counts the number of bits that need to be change in order
 * to convert numberA to numberB.
 *
 * @param {number} numberA
 * @param {number} numberB
 * @return {number}
 */
function bitsDiff(numberA, numberB) {
    return countSetBits(numberA ^ numberB);
}

/**
 * Return the number of bits used in the binary representation of the number.
 *
 * @param {number} number
 * @return {number}
 */
function bitLength(number) {
    let bitsCounter = 0;

    while ((1 << bitsCounter) <= number) {
        bitsCounter += 1;
    }

    return bitsCounter;
}


bitLength()
