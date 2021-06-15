/**
 * Find power-set of a set using BITWISE approach.
 *
 * @param {*[]} originalSet
 * @return {*[][]}
 */
export function bwPowerSet(originalSet) {
    const subSets = [];

    // We will have 2^n possible combinations (where n is a length of original set).
    // It is because for every element of original set we will decide whether to include
    // it or not (2 options for each set element).
    const numberOfCombinations = 2 ** originalSet.length;

    // Each number in binary representation in a range from 0 to 2^n does exactly what we need:
    // it shows by its bits (0 or 1) whether to include related element from the set or not.
    // For example, for the set {1, 2, 3} the binary number of 0b010 would mean that we need to
    // include only "2" to the current set.
    for (let combinationIndex = 0; combinationIndex < numberOfCombinations; combinationIndex += 1) {
        const subSet = [];

        for (let setElementIndex = 0; setElementIndex < originalSet.length; setElementIndex += 1) {
            // Decide whether we need to include current element into the subset or not.
            if (combinationIndex & (1 << setElementIndex)) {
                subSet.push(originalSet[setElementIndex]);
            }
        }

        // Add current subset to the list of all subsets.
        subSets.push(subSet);
    }

    return subSets;
}


/**
 * Find power-set of a set using BACKTRACKING approach.
 *
 * @param {*[]} originalSet - Original set of elements we're forming power-set of.
 * @param {*[][]} allSubsets - All subsets that have been formed so far (empty
 * subset is included by default).
 * @param {*[]} currentSubSet - Current subset that we're forming at the moment.
 * @param {number} startAt - The position of in original set we're starting to form current subset.
 * @return {*[][]} - All subsets of original set.
 */
export function btPowerSet(
    originalSet,
    allSubsets = [[]],
    currentSubSet = [],
    startAt = 0,
) {
    // Let's iterate over originalSet elements that may be added to the subset
    // without having duplicates. The value of startAt prevents adding the duplicates.
    for (let position = startAt; position < originalSet.length; position += 1) {
        // Let's push current element to the subset
        currentSubSet.push(originalSet[position]);

        // Current subset is already valid so let's memorize it.
        // We do array destruction here to save the clone of the currentSubSet.
        // We need to save a clone since the original currentSubSet is going to be
        // mutated in further recursive calls.
        allSubsets.push([...currentSubSet]);

        // Let's try to generate all other subsets for the current subset.
        // We're increasing the position by one to avoid duplicates in subset.
        btPowerSet(originalSet, allSubsets, currentSubSet, position + 1);

        // BACKTRACK. Exclude last element from the subset and try the next valid one.
        currentSubSet.pop();
    }

    // Return all subsets of a set.
    return allSubsets;
}
