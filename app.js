//task1 Breakfast

const breakfast = ["toast", "sausage", "eggs", "orange juice"];
console.log(breakfast);

breakfast[2] = "beans";
console.log("change array", breakfast);

breakfast.push("eggs");
console.log(breakfast);

breakfast.unshift("bacon");
console.log(breakfast);

console.log(breakfast.length);

//task 2 Last Value
coins = [1, 2, 3, 4, 5];
const lastcoins = coins.slice(-1);
console.log(lastcoins);

//task 3 Music

const musicGenres = ["Rock", "Rap"];
musicGenres.push("Jazz");
console.log(musicGenres);

musicGenres[2] = "Classical";
console.log("change array", musicGenres);

musicGenres.unshift("Blues", "Reggae");
console.log(musicGenres);

//task 4

breakfast.sort();
console.log(breakfast);

//task Loop 1 Counting

for (let i = 1; (i = 10); i--) {
  console.log(i); // printing the value of i
}

//task Loop 2 tasks
//1. Create an array, called tasks, of 3 or more household tasks you need to do.
//2. Use a for loop and template literals to iterate through the array printing 'Task $(1+1}: S(taskslil)"
//for each element on the array.

const tasks = ["hoover", "tidy", "cook"];

//task loop 3 Last loop value
let i = 3;
while (i) {
  alert(i--);
}
console.console.log("value of i", i);

//task loop 4 Even numbers
for (let i = 2; i <= 10; i--) {
  if (i % 2 == 0) {
  }
}
console.log(i);

//task ForEach Exercise 1: Fav Foods
const favouriteFood =
  ("chocolate", "roast potatoes", "chilli chicken noodles", "bacon roll");
function iterate(item) {
  console.log(item);
}
favouriteFood.forEach(iterate);

//task ForEach exercise 2: Sum
//Create an array, numArray, with a list of 5 or more numbers
//2. Create a function called sum which takes in an array as a parameter
//3. The function should return the sum of the array.
//4. Test the function with the array you created

//task ForEach exercise 3: Product
//Create a function called product that multiplies all the numbers in the array by each other.
//Test the function by passing in your array of values

//task ForEach exercise 4: Student grades
//Create an array, studentGrades, with the values 70, 20, 53, 64, 78, 60, 32
//2. Create function call passedGrades. The function should take in an array and return an array of the scores above 50.

//task string ex 1 addFullStop
//It should take in a string and the output should always finish with a full stop.
//Some of the input strings will already have a full stop and others will not.

function addFullStop() {
  const text = "It should take in a string and the output should always finish";
  if ((text = string.length - 1 != ".")) {
    string = string + ".";
  }
  console.log(addFullStop);
}

//task string ex 2 Capitalize
//Create a function called capitalize, that takes one parameter
//2. The function should return "This is not a string" if the parameter passed in is not a string
//If the parameter passed in is a string the function should return a capitalised word.
//Examples of inputs to outputs:
//robert => Robert
//DAVE => Dave
//Jenny => Jenny
