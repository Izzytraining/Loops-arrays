/////////////////////////////////////////////////////////
//TUESDAYS HOMEWORK

//Task1 Breakfast

const breakfast = ["toast", "sausage", "eggs", "orange juice"];
console.log(breakfast);

breakfast[2] = "beans";
console.log("change array", breakfast);

breakfast.push("eggs");
console.log(breakfast);

breakfast.unshift("bacon");
console.log(breakfast);

console.log(breakfast.length);

//Task 2 Last Value
coins = [1, 2, 3, 4, 5];
const lastcoins = coins.slice(-1);
console.log(lastcoins);

//Task 3 Music

const musicGenres = ["Rock", "Rap"];
musicGenres.push("Jazz");
console.log(musicGenres);

musicGenres[2] = "Classical";
console.log("change array", musicGenres);

musicGenres.unshift("Blues", "Reggae");
console.log(musicGenres);

//Task 4 Breakfast sort

breakfast.sort();
console.log(breakfast);

//Task Loop 1 Counting

for (let i = 1; (i = 10); i--) {
  console.log(i); // printing the value of i
}

//Loop 2 tasks
//1. Create an array, called tasks, of 3 or more household tasks you need to do.
//2. Use a for loop and template literals to iterate through the array printing 'Task $(1+1}: S(taskslil)"
//for each element on the array.

const tasks = ["hoover", "tidy", "cook"];

//Loop 3 Last loop value
let i = 3;
while (i) {
  alert(i--);
}
console.console.log("value of i", i);

//Loop 4 Even numbers
for (let i = 2; i <= 10; i + 2) {
  console.log(i);
}
//console.log(i);

//
let evenNumbers = numbers.filter(function (element) {
  return element % 2 == 0;
});

/////////////////////////////////////////////////////////////
//THURSDAYS HOMEWORK

//ForEach Exercise 1: Fav Foods
const favouriteFood =
  ("chocolate", "roast potatoes", "chilli chicken noodles", "bacon roll");
function iterate(item) {
  console.log(item);
}
favouriteFood.forEach(iterate);

//ForEach exercise 2: Sum
//Create an array, numArray, with a list of 5 or more numbers
//2. Create a function called sum which takes in an array as a parameter
//3. The function should return the sum of the array.
//4. Test the function with the array you created

const numArray = [2, 3, 6, 8, 99, 32, 4];
function sumArray(array) {
  let sum = 0;
  array.forEach((item) => {
    sum += item;
  });
  console.log(sum);
  return sum;
}

//ForEach exercise 3: Product
//Create a function called product that multiplies all the numbers in the array by each other.
//Test the function by passing in your array of values

const numbers = [1, 5, 6];
function product(arr) {
  arr.forEach((numbers) => {
    value = numbers * numbers;
  });
  return value;
}
console.log("product", value);

//ForEach exercise 4: Student grades
//Create an array, studentGrades, with the values 70, 20, 53, 64, 78, 60, 32
//2. Create function call passedGrades. The function should take in an array and return an array of the scores above 50.

const studentGrades = [70, 20, 53, 64, 78, 60, 32];
function passedGrades(item) {
  return item > 50;
}

// let passedgrades = studentGrades.filter(function(element){return element.startswith(>50);}) console.log(filtergrades)

//Join Exercise 1. Names
const studentNames = ["Layla", "Jack", "Lukas", "Hayley"];
let text = studentNames.join(", ");
//Use join to convert the student array to a string with a space in between each name.

//Join Exercise 2. CSV
let CSV = studentNames.join(", ");
console.log(cvs);
console.log("type of", CSV);

//MAP/FILTER: Create an array Kilometers with 5 or more values.
// Create a function called toMiles which returns a new array of the kilometers array converted miles.
//You should use map in the function body 4. 1 mile = 0.621371 km

const kilometers = [5, 10, 61];
//1 mile is equal to 0.621371 kilometers
let toMiles = 0.621371;
toMiles = kilometers.map(function (m) {
  return m * toMiles;
});

// let addMap = numbers.map(function(element)){return element + element;})console.log(addMap);
// let addMap = numbers.filter(function(element)){return element + element;})console.log(addFilter);

//MAP/FILTER InputArray is a list of students ages but they are some mistakes.
//2. ["18", " 27", 19, 21, "22 ", NaN, Undefined]
//3. Create a function which returns a new array of student ages where all the values have been converted to numbers and any missing values have been removed.
const InputArray = ["18", " 27", 19, 21, "22 ", NaN, undefined];
newArray.filter(function (InputArray, arr) {
  return numbers;
});
console.log(addFilter);

//array.filter(function(currentValue, index, arr), thisValue)

//MAP/FILTER  CanVote
//1.Create function which takes in an array as a parameter and return an array of ages which are equal or over 18. User filter to accomplish this.
//2. Test your functions with an array of ages.

//reduce
//let add = nums.reduce(function(acc, current, index, array)){return acc + cuurent;}) console.log(add);

///////////////////////////////////////////////////
//STRINGS
//String ex 1 addFullStop
//It should take in a string and the output should always finish with a full stop.
//Some of the input strings will already have a full stop and others will not.

//Function addFullStop() {
//const text = "It should take in a string and the output should always finish";
//if ((text = string.length - 1 != ".")) {
// string = string + ".";
// }
//console.log(addFullStop);
//}

//String ex 2 Capitalize
//Create a function called capitalize, that takes one parameter
//2. The function should return "This is not a string" if the parameter passed in is not a string
//If the parameter passed in is a string the function should return a capitalised word.
//Examples of inputs to outputs:
//robert => Robert
//DAVE => Dave
//Jenny => Jenny
