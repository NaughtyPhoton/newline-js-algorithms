// PERMUTATIONS WITH REPETITIONS EXAMPLE.
// Let's generate all possible passwords combinations using permutations with repetitions.
import permutateWithRepetitions from "./permutations.mjs";
import permutateWithoutRepetitions from "./permutationsWithoutRepetitions.mjs";

const possiblePasswordSymbols = ['A', 'B', 'C'];
const passwordLength = 3;
const allPossiblePasswords = permutateWithRepetitions(possiblePasswordSymbols, passwordLength);

// eslint-disable-next-line no-console
console.log(allPossiblePasswords);
/*
  The output will be:
  [
    ['A', 'A', 'A'],
    ['A', 'A', 'B'],
    ['A', 'A', 'C'],
    ['A', 'B', 'A'],
    ['A', 'B', 'B'],
    ['A', 'B', 'C'],
    ['A', 'C', 'A'],
    ['A', 'C', 'B'],
    ['A', 'C', 'C'],
    ['B', 'A', 'A'],
    ['B', 'A', 'B'],
    ['B', 'A', 'C'],
    ['B', 'B', 'A'],
    ['B', 'B', 'B'],
    ['B', 'B', 'C'],
    ['B', 'C', 'A'],
    ['B', 'C', 'B'],
    ['B', 'C', 'C'],
    ['C', 'A', 'A'],
    ['C', 'A', 'B'],
    ['C', 'A', 'C'],
    ['C', 'B', 'A'],
    ['C', 'B', 'B'],
    ['C', 'B', 'C'],
    ['C', 'C', 'A'],
    ['C', 'C', 'B'],
    ['C', 'C', 'C'],
  ]
 */

// PERMUTATIONS WITHOUT REPETITIONS EXAMPLE.
// Now let's generate all possible racing results for three racers.
const racers = ['John', 'Bill', 'Jane'];
const racingResults = permutateWithoutRepetitions(racers);

// eslint-disable-next-line no-console
console.log(racingResults);
/*
  The output will be:
  [
    ['John', 'Bill', 'Jane'],
    ['Bill', 'John', 'Jane'],
    ['Bill', 'Jane', 'John'],
    ['John', 'Jane', 'Bill'],
    ['Jane', 'John', 'Bill'],
    ['Jane', 'Bill', 'John'],
  ]
*/
