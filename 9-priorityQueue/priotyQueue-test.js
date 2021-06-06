const {PriorityQueue} = require("./priorityQueue");

// Let's init an empty priority queue.
const priorityQueue = new PriorityQueue();

// Let's init an array of US cities with population specified in millions.
const notSortedCities = [
    {name: 'New York', population: 8.6},
    {name: 'Chicago', population: 2.7},
    {name: 'San Francisco', population: 0.84},
    {name: 'Houston', population: 2},
];

// Let's add all cities to our priority queue treating population as a priority.
notSortedCities.forEach(city => priorityQueue.add(city, city.population));

// Now let's fetch cities from priority queue one by one and putting them into the
// sortedCities array. We're expecting the cities bing polled in population increasing order.
const sortedCities = [];
for (const city of priorityQueue) {
    sortedCities.push(city);
}

// We're expecting the sortedCities to be truly sorted in population increasing order.
// eslint-disable-next-line no-console
console.log(sortedCities);

/*
 The output would be:

  [
    { name: 'San Francisco', population: 0.84 },
    { name: 'Houston', population: 2 },
    { name: 'Chicago', population: 2.7 },
    { name: 'New York', population: 8.6 },
  ]
 */
