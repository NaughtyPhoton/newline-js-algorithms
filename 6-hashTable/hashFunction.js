function hash(key, bucketSize) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
        hashCode += key.charCodeAt(i);
    }
    return hashCode % bucketSize;
}


hash('ab', 100); // => 95
// The ASCII code for a is 97
// the ASCII code for b is 98
// 97 + 98 = 195
// 195 % 100 is 95


module.exports = {hash};
