//Complete the following problems. The first three answers are provided for you as examples:

//1. write a function called 'logArr' that takes in an array and uses forEach to log each value in the array
const logArr = (arr) => {
  arr.forEach((val) => {
    console.log(val);
  });
}

//3. write a function called 'logFirstFive' that takes in an array and uses the forEach function to log out only the first five values in the array
const logFirstFive = (arr) => {
  arr.forEach((val, index) => {
    if(index < 5) {
      console.log(val);
    }
  });
}

//3. write a function called 'doubleNums' that takes in an array of numbers and uses the map function to double all of them
const doubleNums = (arr) => {
  arr.map((num) => {
    return num * 2;
  });
}

//4. write a function called 'tripleNums' that takes in an array of numbers and uses the map function to double all of them

//5. write a function called 'evens' that takes in an array of numbers and uses the filter function to return only the even numbers

//6. write a function called 'sum' that takes in an array of numbers and uses the reduce function to return the sum of all of the numbers

//7. write a function called 'lastThree' that takes in an array of numbers and uses the filter function to return a new array that only contains the last three items in the orginal array

//8. write a function called 'tripleAndAdd10' that takes in an array of numbers and uses the map function to triple the numbers, add 10 to each number, and return a new array

//9. write a function called 'addGreeting' that takes in an array of strings and uses the map function to return a new array with the word 'hello' added to the front of every string

//10. write a function called 'removeLongWords' that takes in an array of numbers and uses the filter function to remove any words that have more than 5 letters
