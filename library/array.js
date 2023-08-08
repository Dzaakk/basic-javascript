const array = ["user1", "user2", "user3"];

array.forEach(function (value, index) {
  console.info(`${index}: ${value}`);
});

// arrow func
array.forEach((value, index) => console.info(`${index}: ${value}`));

// First In First Out
const queue = [];

queue.push("user 1");
queue.push("user 2");
queue.push("user 3");

// Take the from the front
console.info(queue.shift());
console.info(queue.shift());
console.info(queue.shift());
console.info(queue.shift());

// Last In First Out
const stack = [];

queue.push("user 1");
queue.push("user 2");
queue.push("user 3");

// Take the from the front
console.info(stack.pop());
console.info(stack.pop());
console.info(stack.pop());
console.info(stack.pop());

// Array search
const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.info(source.find((value) => value > 3)); // 4
console.info(source.findIndex((value) => value > 3)); // 3
console.info(source.includes(7)); // false
console.info(source.indexOf(5)); // 4
console.info(source.lastIndexOf(5)); // 9

// Array Filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const odd = numbers.filter((value) => value % 2 === 1);
const even = numbers.filter((value) => value % 2 === 0);

console.info(numbers);
console.info(odd);
console.info(even);

// Array Transform
const names = ["agent", "a", "z"];
const namesUpper = names.map((value) => value.toUpperCase());
console.info(namesUpper);

const namesReduce = names.reduce((before, value) => before + " " + value);
console.info(namesReduce);

const namesRight = names.reduceRight((before, value) => before + " " + value);
console.info(namesRight);
