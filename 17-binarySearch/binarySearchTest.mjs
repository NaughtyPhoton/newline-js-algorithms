import {binarySearch} from "./binarySearch.mjs";


// Let's create a really simple and small demo version of our sorted stars catalog.
const sortedArrayOfStars = [
    {name: 'Alpha Centauri A', position: {}},
    {name: 'Alpha Centauri B', position: {}},
    {name: 'Betelgeuse', position: {}},
    {name: 'Polaris', position: {}},
    {name: 'Rigel', position: {}},
    {name: 'Sirius', position: {}},
    // And 2.5 millions more records here :)
];

// Our custom object comparator for binary search function.
// We will use string comparison here. For example 'Polaris' is smaller than 'Rigel'.
const comparator = (star1, star2) => {
    if (star1.name === star2.name) return 0;
    return star1.name < star2.name ? -1 : 1;
};

// Now let's search for the stars.
console.log(binarySearch(sortedArrayOfStars, {name: 'Not Existing Name'}, comparator)); // -> -1
console.log(binarySearch(sortedArrayOfStars, {name: 'Alpha Centauri A'}, comparator)); // -> 0
console.log(binarySearch(sortedArrayOfStars, {name: 'Alpha Centauri B'}, comparator)); // -> 1
console.log(binarySearch(sortedArrayOfStars, {name: 'Polaris'}, comparator));  // -> 3
