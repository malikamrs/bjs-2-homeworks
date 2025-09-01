function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

    for(let i = 0; i < arr.length; i++) {
      const current = arr[i];

      if (current < min) {
        min = current;
      }

      if (current > max) {
        max = current;
      }

      sum += current;
    }

    const avg = Number((sum / arr.length).toFixed(2));

    return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) { 
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let max = arr[0];  // добавил let
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {  
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (let i = 0; i < arr.length; i++) {  
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    } 
  }

  if (countEvenElement === 0) {
    return 0;
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  if (!Array.isArray(arrOfArr) || arrOfArr.length === 0) {
    return 0;
  }
  
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult === -Infinity ? 0 : maxWorkerResult;
}
