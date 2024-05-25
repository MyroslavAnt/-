// //Створити проміс який буде виводити ваше імя та вік
// let a = new Promise(function(resolve, reject){
//     resolve("Noname")
// })

// a.then(function(a){
//     console.log(a)
// })



























// //Створити 3 проміса які будуть виводити будь який текст. Вивести 1 успішний проміс
// const promise1 = new Promise((resolve, reject) => {
//     reject("error in promise1");
//     setTimeout(resolve, 500, "Hello");
// });

// const promise2 = new Promise((resolve) => {
//     setTimeout(resolve, 1000, "World");
// });

// const promise3 = new Promise((resolve) => {
//     setTimeout(resolve, 200, "!");
// });

// Promise.any([promise1, promise2, promise3])
//     .then(value => console.log(value))    // !
//     .catch(error => console.log(error));




























// //Створити проміс який перевіряє чи однакові строки чи ні
// const promise12 = new Promise((resolve, reject) => {
//     let a = 'Hello'
//     let b = 'World'

//     if(a == b){
//         resolve('Однакові')
//     }
//     else{
//         resolve('Різні')
//     }
// });

// promise12.then(function(value){
//     console.log(value)
// })



















// //Створити колл бек будь яким способом
// function set(callback){
//     callback()
// }
// function get(){
//     console.log("Hello")
// }

// set(get)


















// //створит пустий масив. Потім масив заповнити числами від 40 до 100
// let numbers = [];
// for (let i = 40; i <= 100; i++) {
//     numbers.push(i);
// }
// console.log(numbers);


























