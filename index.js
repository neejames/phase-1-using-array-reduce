const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalNum = 0;
const totalBatteries = batteryBatches.reduce(
    (accumulator, currentNum) => accumulator + currentNum, totalNum

)
console.log(totalBatteries);