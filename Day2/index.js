// --- Day 2: Dive! ---
const fs = require('fs')
const array = fs.readFileSync('Day2/input.txt').toString().split('\n');

let horizontal = 0;
let depth = 0;

// // Part 1
for(row in array) {
  if(array[row].split(' ')[0] === 'forward') {
    horizontal += parseInt(array[row].split(' ')[1])
  } else if (array[row].split(' ')[0] === 'down') {
    depth += parseInt(array[row].split(' ')[1])
  } else if (array[row].split(' ')[0] === 'up') {    
    depth -= parseInt(array[row].split(' ')[1])
  }
}

console.log(horizontal * depth)

// Part 2
horizontal = 0;
depth = 0;
let aim = 0;
for(row in array) {
  if(array[row].split(' ')[0] === 'forward') {
    horizontal += parseInt(array[row].split(' ')[1])
    depth += (aim * parseInt(array[row].split(' ')[1]))
  } else if (array[row].split(' ')[0] === 'down') {
    aim += parseInt(array[row].split(' ')[1])
  } else if (array[row].split(' ')[0] === 'up') {    
    aim -= parseInt(array[row].split(' ')[1])
  }
}

console.log(horizontal * depth)