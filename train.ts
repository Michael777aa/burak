// H-TASK: 

 //shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin MASALAN: getPositive([1, -4, 2]) return qiladi "12"

 function getPositive(a: number[]): string {
    let result = '';
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            result += a[i];
        }
    }
    return result;
}

console.log(getPositive([7, -8, 4])); // Output: "74"
