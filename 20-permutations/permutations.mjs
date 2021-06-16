/**
 * @param {*[]} permutationOptions
 * @param {number} permutationLength
 * @return {*[]}
 */
export default function permutateWithRepetitions(
    permutationOptions,
    permutationLength = permutationOptions.length,
) {
    // If permutation length is equal to 1 than every element of the permutationOptions
    // is a permutation subset.
    if (permutationLength === 1) {
        return permutationOptions.map(permutationOption => [permutationOption]);
    }

    // Init permutations array.
    const permutations = [];

    // Get permutations af smaller size that made of all permutation options.
    const smallerPermutations = permutateWithRepetitions(
        permutationOptions,
        permutationLength - 1,
    );

    
    // Recursively go through all options and join it to the smaller permutations.
    permutationOptions.forEach((currentOption) => {
        // Concatenate current options to smaller permutations.
        smallerPermutations.forEach((smallerPermutation) => {
            permutations.push([currentOption].concat(smallerPermutation));
        });
    });

    // Return permutations.
    return permutations;
}
