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
// class Person{
//     name: string = "MirosAnt"
//     age: number = 777
//     MrAntPro(){
//         console.log(this.name, this.age)
//     }
// }
// let a = new Person()
// a.MrAntPro()
// class MirosAnt{
//     name: string = "MrAntPro"
//     MrInfoExpert(){
//         for(let i: number = 0; i < this.name.length; i++){
//             console.log(this.name[i]);
//         }
//         }
//         Mraaant(){
//             console.log(this.name.length);
//         }
// } 
// let b = new MirosAnt()
// b.MrInfoExpert()
// b.Mraaant();
//Створити клас в якому 2 поля числа Створити метод який буде максимальне число
var Roman = /** @class */ (function () {
    function Roman() {
        this.age4 = 777;
        this.age5 = 333;
    }
    Roman.prototype.MrMetod = function () {
        if (this.age4 > this.age5) {
            console.log(this.age4);
        }
        else
            (console.log(this.age5));
    };
    return Roman;
}());
var MrPro = new Roman();
MrPro.MrMetod();
