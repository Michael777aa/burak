// N-TASK: 

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

function palindromCheck(input: string): boolean {
  const normalized = input.toLowerCase();
  let start = 0;
  let end = normalized.length - 1;
  while (start < end) {
      if (normalized[start] !== normalized[end]) {
          return false;
      }
      start++;
      end--;
  }
  return true;
}
console.log(palindromCheck("dad")); 
