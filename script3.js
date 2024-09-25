// let a = 10;
// let b = 0;
// try {
//   let result;
//   if (b === 0) {
//     result = "error"; 
//   } else {
//     result = a / b;
//   }
//   console.log("Результат:", result);
// } catch (error) {
//   console.log("Ошибка:", error.message);
// }















































// function giftshop(){
//     console.log("...")
// }
// try{
//     giftshop()
// }
// catch(error){
//     console.log("shop")
// }















































// let value = "123abc"; 
// try {
//   let number = Number(value); 
//   if (isNaN(number)) {
//     throw new Error("-");
//   }
//   console.log("Число:", number);
// } catch (error) {
//   console.log("Ошибка:", error.message);
// }


































// for(let mirosantI = 50; mirosantI < 213321876231458716235; mirosantI+=50){
//         console.log(mirosantI)
// }




















































// let Join = "Toonight"
// console.log(Join.repeat(5))




































// let I = "Hello"
// console.log(I.includes("Hello"))




























// let Join = "Hello script"
// console.log(Join.toUpperCase())
// console.log(Join.toLowerCase())







































// let Classes = "Transformers ONE "
// let Transformer = "Transformers 2007"
// let GoogLuck = Classes.concat(Transformer)
// console.log(GoogLuck)











































// let room = "Break room"
// room = room.replace("room", "rooms")
// console.log(room)























// let u = "Hello World"
// let Buisness = /W/
// let I = Buisness.test(u)
// console.log(I)


































// let ChatGPT = new Promise(function(resolve, reject){
//      console.log("ChatGPT")
// })







































// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "Hello");
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, "World");
// });

// promise1.then(value => console.log(value));
// promise2.then(value => console.log(value));






































// const promise1 = new Promise((resolve,reject) => {
//     setTimeout(resolve, 1000, "Hello");
// });
// const promise2 = new Promise((resolve,reject) => {
//     setTimeout(resolve, 500, "World");
// });
// Promise.all([promise1, promise2])
//     .then(values => {
//                 const [promise1data, promise2data] = values;
//                 console.log(promise1data, promise2data);    // Hello World
// });































// const promise1 = new Promise((resolve,reject) => {
//     reject("Непредвиденная ошибка");
//     setTimeout(resolve, 500, "Hello");
// });
// const promise2 = new Promise((resolve,reject) => {
//     setTimeout(resolve, 1000, "World");
// });
  
// Promise.allSettled([promise1, promise2])
//     .then(values => {
//         const [promise1data, promise2data] = values;
//         console.log(promise1data);  // {status: "rejected", reason: "Непредвиденная ошибка"}
//         console.log(promise2data);  // {status: "fulfilled", value: "World"}
// });





































// const promise1 = new Promise((resolve) => {
//     setTimeout(resolve, 500, "Hello");
// });
// const promise2 = new Promise((resolve) => {
//     setTimeout(resolve, 1000, "World");
// });
// Promise.race([promise1, promise2])
//     .then(value => console.log(value))       // Hello
//     .catch(error => console.log(error));



























// var promise9 = new Promise(function(resolve){
//     setTimeout(resolve, 20000, "15");
// });
// promise9.then(function(value){
//         console.log(value)
// });




























































