/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
export default function permutateWithoutRepetitions(permutationOptions) {
    // If we have only one element to permutate then this element is already a permutation of itself.
    if (permutationOptions.length === 1) {
        return [permutationOptions];
    }

    // Init permutations array.
    const permutations = [];

    // Get all permutations for permutationOptions excluding the first element.
    // By  doing this we're excluding the first element from all further smaller permutations.
    const smallerPermutations = permutateWithoutRepetitions(permutationOptions.slice(1));

    // Insert first option into every possible position of every smaller permutation.
    const firstOption = permutationOptions[0];
    for (let permIndex = 0; permIndex < smallerPermutations.length; permIndex += 1) {
        const smallerPermutation = smallerPermutations[permIndex];

        // Insert first option into every possible position of smallerPermutation.
        for (let positionIndex = 0; positionIndex <= smallerPermutation.length; positionIndex += 1) {
            const permutationPrefix = smallerPermutation.slice(0, positionIndex);
            const permutationSuffix = smallerPermutation.slice(positionIndex);
            permutations.push(permutationPrefix.concat([firstOption], permutationSuffix));
        }
    }

    // Return all permutations.
    return permutations;
}
