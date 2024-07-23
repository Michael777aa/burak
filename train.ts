// Y-TASK:

// Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
// MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

function findIntersection<T>(array1: T[], array2: T[]): T[] {
  return array1.filter((value) => array2.includes(value));
}

const result = findIntersection([1, 2, 3], [3, 2, 0]);
console.log(result);
