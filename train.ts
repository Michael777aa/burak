// U-TASK:

// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;
function sumOdds(num: number): number {
  let count = 0;

  for (let i = 1; i <= num; i += 2) {
    count++;
  }

  return count;
}
console.log(sumOdds(9));
