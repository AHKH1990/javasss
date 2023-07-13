const people = ["Greg", "Mary", "Devon", "James"];

// 1. Iterate through the array and console.log all of the people
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. Remove "Greg" from the array
people.shift();

// 3. Remove "James" from the array
people.pop();

// 4. Add "Matt" to the front of the array
people.unshift("Matt");

// 5. Add your name to the end of the array
people.push("Your Name");

// 6. Iterate through the array and exit the loop after console.log "Mary"
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}

// 7. Make a copy of the array using slice, excluding "Mary" and "Matt"
const copyArray = people.slice(1, 3);

// 8. Get the indexOf "Mary"
const indexOfMary = people.indexOf("Mary");

// 9. Get the indexOf "Foo"
const indexOfFoo = people.indexOf("Foo");

// 10. Remove "Devon" and add "Elizabeth" and "Artie" using splice
people.splice(2, 1, "Elizabeth", "Artie");

// 11. Create a new variable "withBob" by concatenating "Bob" to the people array
const withBob = people.concat("Bob");
