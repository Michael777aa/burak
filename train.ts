// O-TASK:

//Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45
function calculateSumOfNumbers(arr: any[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (typeof element === 'number') {
          sum += element;
      }
  }
return sum;
}
const result = calculateSumOfNumbers([10, "10", {son: 10}, true, 35]);
console.log(result);
