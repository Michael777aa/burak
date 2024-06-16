
// I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4


function majorityElement(arr: number[]): number {
    const countMap: { [key: number]: number } = {};

    for (const num of arr) {
        if (countMap[num] !== undefined) {
            countMap[num]++;
        } else {
            countMap[num] = 1;
        }
    }

    let maxCount = 0;
    let majorityElement: number | null = null;

    for (const num in countMap) {
        if (countMap[num] > maxCount) {
            maxCount = countMap[num];
            majorityElement = parseInt(num);
        }
    }

    return majorityElement as number;
}

const result = majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);
console.log(result); 
