/*   
P-TASK:

Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
*/

function objectToArray(obj) {
  return Object.keys(obj).map((key) => [key, obj[key]]);
}

console.log(objectToArray({ a: 10, b: 20 }));
console.log(objectToArray({ name: "Steve", age: 22, city: "Uzbekistan" }));
