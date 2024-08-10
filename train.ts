// ZG-TASK:

// Shunday function yozing, u berilgan string parametrni snake casega otkazib qaytarsin.
// MASALAN: capitalizeWords('name should be a string') return 'name_should_be_a_string'
function capitalizeWords(s: string): string {
  return s.split(" ").join("_").toLowerCase();
}

const result = capitalizeWords("Name Should Be A String");
console.log(result);
