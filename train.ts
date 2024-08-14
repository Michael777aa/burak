// ZI-TASK:

// Shunday function yozing, u function ishga tushgandan 3 soniyadan keyin "Hello World" ni qaytarsin.
// MASALAN: delayHelloWorld("Hello World") return "Hello World"
function delayHelloWorld(arr: string): void {
  setTimeout(function () {
    console.log(arr);
  }, 3000);
}
delayHelloWorld("Hello world");
