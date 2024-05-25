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


























// //Створити цикл який буде виводити числа від 0 до 100. Числа які діляться на 10 без остачі пропустити. Всі інші вивести
// //створити цикл який буде виводити числа від 20 до 50. Пропустити числа 25 та 30. Всі інші вивести
// for (let i = 0; i <= 100; i++) {
//     if (i % 10 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 20; i <= 50; i++) {
//     if (i === 25 || i === 30) {
//         continue;
//     }
//     console.log(i);
// }























// //Створити обєкт  в якому буде обєкт з 2 полями. Вивести всі поля об'єктів
// const mainObject = {
//     innerObject: {
//         ЯкеДніпроЯТебеЗапитую1: "НіякогоРетефула1!",
//         ЯкеДніпроЯТебеЗапитую2: "НіякогоРетефула2!"
//     }
// };
// console.log(mainObject.innerObject.ЯкеДніпроЯТебеЗапитую1);
// console.log(mainObject.innerObject.ЯкеДніпроЯТебеЗапитую2);






















// //Створити клас в якому буде 2 поля строки. Створити клас наслідник в якому метод буде виводити найдлинішу строку
// class ParentClass {
//     str1 = "Φμβφυ";
//     str2 = "Φμβφυβ";
// }

// class ChildClass extends ParentClass {
//     printLongestString() {
//         if (this.str1.length > this.str2.length) {
//             console.log(this.str1);
//         } else {
//             console.log(this.str2);
//         }
//     }
// }

// const childObj = new ChildClass();
// childObj.printLongestString();































// //Створити строку. Створити масив пустий та додати кожну літеру до масиву
// const myString = "MIROSANT";
// const myArray = [];
// for (let i = 0; i < myString.length; i++) {
//     myArray.push(myString[i]);
// }
// console.log(myArray);





















