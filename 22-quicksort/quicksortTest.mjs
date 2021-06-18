import quicksort from "./quicksort.mjs";

// Let's sort user list by age in O(n * log(n)) time.

// Init users list.
const notSortedUserList = [
    {age: 18, name: 'Bill'},
    {age: 20, name: 'Kate'},
    {age: 20, name: 'Tom'},
    {age: 24, name: 'Cary'},
    {age: 37, name: 'Mike'},
    {age: 42, name: 'Ben'},
    {age: 50, name: 'Jane'},
    {age: 60, name: 'Julia'},
];

// Create comparator function that will compare two user objects.
const userComparator = (user1, user2) => {
    if (user1.age === user2.age) {
        return 0;
    }

    return user1.age > user2.age ? 1 : -1;
};

// Sort user list.
const sortedUserList = quicksort(notSortedUserList, userComparator);

// eslint-disable-next-line no-console
console.log(sortedUserList);
/*
  The output will be:
  [
      { age: 18, name: 'Bill' },
      { age: 20, name: 'Kate' },
      { age: 20, name: 'Tom' },
      { age: 24, name: 'Cary' },
      { age: 37, name: 'Mike' },
      { age: 42, name: 'Ben' },
      { age: 50, name: 'Jane' },
      { age: 60, name: 'Julia' },
  ]
 */

