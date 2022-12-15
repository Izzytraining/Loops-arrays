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

for (let i = 1; (i = 10); i++) {
  console.log(i); // printing the value of i
}
//task Loop 2
