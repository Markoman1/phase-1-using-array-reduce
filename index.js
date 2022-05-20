const batteryBatches = [4, 5, 3, 4, 4, 6, 5];





// Code your solution here
let initialValue = 0;
const totalBatteries = batteryBatches.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    );







// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);