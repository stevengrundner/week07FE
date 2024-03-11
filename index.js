//      1) Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

ages = [3, 9, 23, 64, 2, 8, 28, 93];  //  array's are denoted with []
console.log(ages);

//      a)  Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//          Do not use numbers to reference the last element, find it programmatically.
//          ages[7] - ages[0] is not allowed!

console.log(ages[ages.length -1] - (ages [0])); // in order to programmically subtract you need to use the .length and then subtract however many you want to go down in the array

//      b)  Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages = [3, 9, 23, 64, 2, 8, 28, 93, 100];

console.log(ages[ages.length -1] - (ages [0])); // the step still works because i added 100 to the array above

//      c)  Use a loop to iterate through the array and calculate the average age.

let initialValue = 0;           
let averageAge = ages.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);                              // this process is starting at 0 and adding up all the ages in the array using the reduce method. The method works, when i add numbers to the array or subtract them as well. It also works when i change the starting point
console.log(averageAge);


for (i = 0; i < ages.length; i++){
    console.log(averageAge / ages.length)
}       // this is using the for loop to iterate through the array to calculate the average. It also works when changing the numbers in the array










//      2)      Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

console.log(names);


//      2a)     Use a loop to iterate through the array and calculate the average number of letters per name.

let length = names.map(function(letters){
    return letters.length;
});
console.log(length);


//      2b)     Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

//      3)      How do you access the last element of any array?

//      4)      How do you access the first element of any array?



//      3)      How do you access the last element of any array?

//      4)      How do you access the first element of any array?

