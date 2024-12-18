"use strict";
// function Fox(age: number, age2: number){
//     if(age>age2){
//         console.log(age2)
//     }
//     else{
//         console.log(age)
//     }
// }
// Fox(3, 7);
Object.defineProperty(exports, "__esModule", { value: true });
// let a: number = [2,3,4,6];
// a[0] = 1
// a[3] = 5
// console.log(a)
//Створити клас в якому 2 поля числа Створити метод який буде складати поля Через екземпляр викликати метод
var Person = /** @class */ (function () {
    function Person() {
        this.name = "MirosAnt";
        this.age = 777;
    }
    Person.prototype.MrAntPro = function () {
        console.log(this.name, this.age);
    };
    return Person;
}());
var a = new Person();
a.MrAntPro();
