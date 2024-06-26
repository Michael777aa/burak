// M-TASK: 

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];


type NumberSquare = {
  number: number;
  square: number;
};

function getSquareNumbers(arr: number[]): NumberSquare[] {
  const result: NumberSquare[] = [];
  for (let i = 0; i < arr.length; i++) {
      result.push({
          number: arr[i],
          square: arr[i] * arr[i]
      });
  }
  return result;
}
const result = getSquareNumbers([1, 2, 3]);
console.log(result);
