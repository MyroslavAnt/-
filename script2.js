// // Створити обєкт з полями. Привести до json виду і потім до виду обєкта. Вивести обєкт
// let i = {
//     name: "MrAnt",
//     age: 13
// }
// let jsonString = JSON.stringify(i);
// console.log("JSON-строка:", jsonString);
// let newI = JSON.parse(jsonString);
// console.log("Standart object", newI);




















// //Створити функцію яка приймає 2 параметра строку у виді чисел. Скласти 2 параметра і потім привести до типу числа результат.
// function Fun(rtr1, rtr2){
//     let result = rtr1 + rtr2;
//     rusult = Number(result)
//     return result;
// }
// let string1 = "13 ";
// let string2 = "14";
// let sum = Fun(string1, string2);
// console.log("Результат додавання:", sum);
















// //Створити масив і знайти суму
// let a = [983,619,5064,9,950,641]

// let b = 0

// for(let i = 0; i < a.length; i++){
//     b+=a[i]
// }

// console.log(b)






















// //Створити обєкт в якому буде поле число. Створити метод який буде змінювати значення поля на число 2. Викликати через обєкт метод
// let a = {
//     m: 9,
//     change(){
//         this.m = 2
//         console.log(this.m)
//     }
// }

// a.change()






















// //Створити клас в якому буде приватне поле число. Створити метод який буде приймати параметр і змінювати значення приватного поля
// class A{
//     #a = 4

//     change(newA){
//         this.#a = newA
//         console.log(this.#a)
//     }
// }
// let i = new A()
// i.change(30)
























// //Створити обєкт в якому метод буде виводити масив через 5 секунд
// let Unit = {
//     printArrayAfterDelay: function(array) {
//         setTimeout(function() {
//             console.log("Binola", array);
//         }, 5000);
//     }
// };
// let myArray = [1, 2, 3, 4, 5];
// Unit.printArrayAfterDelay(myArray);























// //Створити множенство 2 значення додати а 2 значення видалити
// let a = new Set([1,2,3,4,5])
// a.add(20)
// a.add(40)
// a.delete(1)
// a.delete(2)

// console.log(a)
























// //Створити базовий клас в якому метод буде виводити повідомлення. Створити клас наслідник в якому метод буде викликати метод базового класа.
// class ClassClass {
//     showMessage() {
//         console.log("Hi MrAnt, on your YouTube 1 million Subscribers");
//     }
// }
// class ClassCl extends ClassClass {
//     callBaseMethod() {
//         this.showMessage();
//     }
// }
// let mySubObject = new ClassCl();
// mySubObject.callBaseMethod();




















// //Створити клас в якому метод буде приймати 2 параметра строки. Метод буде виводити мінімальну по длинні строку
// class StringHandler{
//     printShortestString(str1, str2) {
//         if (str1.length < str2.length) {
//             console.log("Мінімальна строка:", str1);
//         } else if (str2.length < str1.length) {
//             console.log("Мінімальна строка:", str2);
//         } else {
//             console.log("Строки мають однакову довжину.");
//         }
//     }
// }
// let handler = new StringHandler();
// handler.printShortestString("JavaScript", "Python");



























