"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const d = b**2 - 4*a*c;

  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr.push(-b / (2*a));
  } else {
    arr.push((-b + Math.sqrt(d)) / (2*a));
    arr.push((-b - Math.sqrt(d)) / (2*a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const P = (percent / 100) / 12;

  const S = amount - contribution;

  const payment = S * (P + (P / (((1 + P) ** countMonths) - 1)));

  const total = payment * countMonths;

  return Math.round(total * 100) / 100;
}