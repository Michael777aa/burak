// G-TASK: 

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function 
// bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.


function getHighestIndex(numbers: number[]): number {
    let highestNumber: number = Number.NEGATIVE_INFINITY;
    let highestIndex: number = -1;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > highestNumber) {
            highestNumber = numbers[i];
            highestIndex = i;
        }
    }

    return highestIndex;
}

console.log(getHighestIndex([5, 235666, 12, 21, 8])); // Output: 1





// Architectural pattern: MVC, DI, MVP

// MVC => Model View Controller
// DI => Dependency Injection
// MVP for frontend model view presenter

// design pattern: Middleware, Decotar
// what diferrence commonjs modulejs in general
