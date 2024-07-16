// V-TASK:

// Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

function countChars(str: string): Record<string, number> {
  const charCount: Record<string, number> = {};
  const uniqueChars = new Set(str);

  uniqueChars.forEach((char) => {
    charCount[char] = str.split(char).length - 1;
  });

  return charCount;
}

const result = countChars("hello");
console.log(result);
