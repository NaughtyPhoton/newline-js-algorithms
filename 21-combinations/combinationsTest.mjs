
// Combination WITHOUT repetitions.
// Let's generate all possible teams compositions that may work on the next projects.
import {combineWithoutRepetitions, combineWithRepetitions} from "./combinations.mjs";

const teamSize = 3;
const candidates = ['Bill', 'John', 'Kate', 'Jane', 'Mike'];
const possibleTeams = combineWithoutRepetitions(candidates, teamSize);

// eslint-disable-next-line no-console
console.log(possibleTeams);
/*
 The output will be:
 [
      ['Bill', 'John', 'Kate'],
      ['Bill', 'John', 'Jane'],
      ['Bill', 'John', 'Mike'],
      ['Bill', 'Kate', 'Jane'],
      ['Bill', 'Kate', 'Mike'],
      ['Bill', 'Jane', 'Mike'],
      ['John', 'Kate', 'Jane'],
      ['John', 'Kate', 'Mike'],
      ['John', 'Jane', 'Mike'],
      ['Kate', 'Jane', 'Mike'],
 ]
 */

// Combination WITH repetitions.
// Let's generate all possible combinations of ice cream scoops.
const iceCreamFlavours = ['banana', 'mint', 'pistachio', 'vanilla'];
const numberOfScoops = 3;
const scoopCombinations = combineWithRepetitions(iceCreamFlavours, numberOfScoops);

// eslint-disable-next-line no-console
console.log(scoopCombinations);
/*
 The output will be:
 [
      ['banana', 'banana', 'banana'],
      ['banana', 'banana', 'mint'],
      ['banana', 'banana', 'pistachio'],
      ['banana', 'banana', 'vanilla'],
      ['banana', 'mint', 'mint'],
      ['banana', 'mint', 'pistachio'],
      ['banana', 'mint', 'vanilla'],
      ['banana', 'pistachio', 'pistachio'],
      ['banana', 'pistachio', 'vanilla'],
      ['banana', 'vanilla', 'vanilla'],
      ['mint', 'mint', 'mint'],
      ['mint', 'mint', 'pistachio'],
      ['mint', 'mint', 'vanilla'],
      ['mint', 'pistachio', 'pistachio'],
      ['mint', 'pistachio', 'vanilla'],
      ['mint', 'vanilla', 'vanilla'],
      ['pistachio', 'pistachio', 'pistachio'],
      ['pistachio', 'pistachio', 'vanilla'],
      ['pistachio', 'vanilla', 'vanilla'],
      ['vanilla', 'vanilla', 'vanilla'],
 ]
 */

