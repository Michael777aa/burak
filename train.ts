// H2-TASK: 

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"


function getDigits(input: string): string {
    let result = '';
    for (const a of input) {
        if (/\d/.test(a)) {
            result += a;
        }
    }
    return result;
}

console.log(getDigits("m14i1t")); 
