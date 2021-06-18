import {Comparator} from "../comparator.js";

export default function quicksort(originalArray, comparatorCallback = null) {
    const comparator = new Comparator(comparatorCallback);
    const array = [...originalArray];

    if (array.length <= 1) return array;

    const leftArray = [];
    const rightArray = [];

    const pivotElement = array.shift();
    const centerArray = [pivotElement];

    // Split all elements amongst left, right, center arrays.
    while (array.length) {
        const currentElement = array.shift();
        if (comparator.equal(currentElement, pivotElement)) {
            centerArray.push(currentElement);
        } else if (comparator.lessThan(currentElement, pivotElement)) {
            leftArray.push(currentElement);
        } else {
            rightArray.push(currentElement);
        }
    }

    const leftArraySorted = quicksort(leftArray, comparatorCallback);
    const rightSortedArray = quicksort(rightArray, comparatorCallback);

    return [...leftArraySorted, ...centerArray, ...rightSortedArray];
}
