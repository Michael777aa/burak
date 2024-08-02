// ZD-TASK:

// Shunday function yozing, uni number, array va number parametrlari bolsin va berilgan 1-parametr numberga teng indexni array ichidan topib 3-parametrdagi raqam bilan almashtirib yangilangan arrayni qaytarsin
// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]
function changeNumberInArray(
  number: number,
  array: number[],
  newNumber: number
): number[] {
  const index = array.indexOf(number);
  if (index !== -1) {
    array[index] = newNumber;
  }
  return array;
}

console.log(changeNumberInArray(1, [1, 3, 7, 2], 2)); // [1, 2, 7, 2]
