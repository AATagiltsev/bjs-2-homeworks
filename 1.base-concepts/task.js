"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (!d) {
    arr.push(-b / (2 * a));
  }
  if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let formatedPercent = percent / 100 / 12;
  if (+formatedPercent) {
    let banking = amount - contribution;
    let pay = banking * (formatedPercent + formatedPercent / (((1 + formatedPercent) ** countMonths) - 1));
    return +(pay * countMonths).toFixed(2);
  }
}