// G-TASK: 

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function 
// bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.


function getHighestIndex(numbers) {
    let highestNumber = Number.MIN_VALUE;
    let highestIndex = -1;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > highestNumber) {
            highestNumber = numbers[i];
            highestIndex = i;
        }
    }

    return highestIndex;
}

console.log(getHighestIndex([12,31,2312,312,313,213])); // Output: 1
