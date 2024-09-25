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















































let value = "123abc"; 
try {
  let number = Number(value); 
  if (isNaN(number)) {
    throw new Error("-");
  }
  console.log("Число:", number);
} catch (error) {
  console.log("Ошибка:", error.message);
}