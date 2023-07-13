// Task 1: Fill an array with 100 of the same object using the array fill method.
const obj = { name: 'John', age: 30 };
const filledArray = Array(100).fill(obj);

console.log(filledArray);

// Task 2: Create an array with numbers ranging from 1-100 using the Array.from method.
const numberArray = Array.from({ length: 100 }, (_, index) => index + 1);

console.log(numberArray);

// Task 3: Convert only values of an object into one array.
const values = Object.values(obj);

console.log(values);

// Task 4: Convert an array into one object.
const array = [['name', 'John'], ['age', 30]];
const convertedObject = Object.fromEntries(array);

console.log(convertedObject);

// Task 5: Find out if an array is an array.
const arr = [1, 2, 3];
const isArray = Array.isArray(arr);

console.log(isArray);

// Task 6: Copy an array
// Create a copy of an array that won't affect the original array if modified.
const originalArray = [1, 2, 3];
const shallowCopy = [...originalArray];

// Create a copy of an array that will affect the original array if modified.
const referenceCopy = originalArray;

shallowCopy[0] = 10;
referenceCopy[0] = 10;

console.log(originalArray);
console.log(shallowCopy);
console.log(referenceCopy);
