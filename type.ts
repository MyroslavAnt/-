// function Fox(age: number, age2: number){
//     if(age>age2){
//         console.log(age2)
//     }
//     else{
//         console.log(age)
//     }
// }
// Fox(3, 7);

import { json } from "express/lib/response"
















// let a: number = [2,3,4,6];
// a[0] = 1
// a[3] = 5
// console.log(a)



















//Створити клас в якому 2 поля числа Створити метод який буде складати поля Через екземпляр викликати метод
class Person{
    name: string = "MirosAnt"
    age: number = 777
    MrAntPro(){
        console.log(this.name, this.age)
    }
}
let a = new Person()
a.MrAntPro()