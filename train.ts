// X-TASK:

// Shunday function yozing, uni object va string parapetrlari bolsin. Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)
// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2
function countOccurrences(obj: any, key: string): number {
  if (typeof obj !== "object" || obj === null) {
    return 0;
  }

  return Object.keys(obj).reduce((count, k) => {
    let valueCount = 0;
    if (k === key) {
      valueCount = 1;
    }
    return count + valueCount + countOccurrences(obj[k], key);
  }, 0);
}

const data = {
  model: "Bugatti",
  steer: {
    model: "HANKOOK",
    size: 30,
    details: {
      model: "SomeModel",
    },
  },
};

console.log(countOccurrences(data, "model"));
