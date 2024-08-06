// ZE-TASK:

// Shunday function yozing, uni  string parametri bolsin. String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
// MASALAN: removeDuplicate('stringg') return 'string'

function removeDuplicate(str: string): string {
  let result = "";
  let seen = new Set();

  for (let char of str) {
    if (!seen.has(char)) {
      result += char;
      seen.add(char);
    }
  }
  return result;
}

console.log(removeDuplicate("stringg"));
