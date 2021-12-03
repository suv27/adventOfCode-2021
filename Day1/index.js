// --- Day 1: Sonar Sweep ---
const fs = require('fs');
const sonarSweeps = fs.readFileSync('Day1/input.txt').toString().split('\n');

// Part 1
let increased = 0;
for(beep in sonarSweeps) {
  if(Number(sonarSweeps[beep]) < Number(sonarSweeps[Number(beep)+1])) increased++
}

console.log(increased)

// Part 2
increased = 0;
let previousSum = 0;
let comingSum = 0;
for(beep in sonarSweeps) {
  previousSum = (Number(sonarSweeps[beep]) + Number(sonarSweeps[Number(beep)+1]) + Number(sonarSweeps[Number(beep)+2]))
  comingSum = (Number(sonarSweeps[Number(beep)+1]) + Number(sonarSweeps[Number(beep)+2]) + Number(sonarSweeps[Number(beep)+3]))
  if(previousSum < comingSum) increased++
}

console.log(increased)
