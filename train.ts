// R-TASK:

// Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

function calculate(expression: string): number {
  const numbers = expression.split("+").map(Number);
  const result = numbers.reduce((sum, num) => sum + num, 0);
  return result;
}
console.log(calculate("1+2"));
