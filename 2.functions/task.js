function getArrayParams(...arr) {
  let min = 0;
  let max = 0;
  let avg = 0;
  let sum = 0;
  min = Math.min(...arr);
  max = Math.max(...arr);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return arr.reduce((a, b) => a + b, 0) || 0;
}

function differenceMaxMinWorker(...arr) {
  return !!arr.length ? (Math.max(...arr) - Math.min(...arr)) : 0;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return (sumEvenElement - sumOddElement) || 0;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return (sumEvenElement / countEvenElement) || 0;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  const funcResult = func(...arrOfArr[i]);
  for (let i = 0; i < arrOfArr.length; i++) {
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  }
  return maxWorkerResult;
}
