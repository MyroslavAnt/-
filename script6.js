// const express = require("express");
//    
// const app = express();
//    
// // создаем парсер для данных application/x-www-form-urlencoded
// const urlencodedParser = express.urlencoded({extended: false});
//   
// app.get("/", function (_, response) {
//     response.sendFile(__dirname + "/index.html");
// });
// app.post("/", urlencodedParser, function (request, response) {
//     if(!request.body) return response.sendStatus(400);
//     console.log(request.body);
//     response.send(`${request.body.userName} - ${request.body.userAge}`);
// });
//    
// app.listen(3000, ()=>console.log("Сервер запущен..."));















// const express = require("express");
// const app = express();
//  
// // определяем Router
// const productRouter = express.Router();
//  
// // определяем маршруты и их обработчики внутри роутера
// productRouter.use("/create", function(request, response){
//   response.send("Добавление товара");
// });
// productRouter.use("/:id", function(request, response){
//   response.send(`Товар ${request.params.id}`);
// });
// productRouter.use("/", function(request, response){
//   response.send("Список товаров");
// });
// // сопоставляем роутер с конечной точкой "/products"
// app.use("/products", productRouter);
//  
// app.use("/about", function (request, response) {
//   response.send("О сайте");
// });
//  
// app.use("/", function (request, response) {
//   response.send("Главная страница");
// });
// app.listen(3000, ()=>console.log("Сервер запущен..."));






























// const express = require("express");
//  
// const app = express();
//  
// app.set("view engine", "hbs");
//  
// app.use("/contact", function(_, response){
//      
//     response.render("contact.hbs", {
//         title: "Мои контакты",
//         email: "myrosllavsh@gmail.com",
//         phone: "+380 (68) 218 62 05"
//     });
// });
// app.use("/", function(_, response){
//      
//     response.send("Главная страница");
// });
// app.listen(3000, console.log("Сервер запущен..."));































// const express = require("express");
//  
// const app = express();
// app.set("view engine", "hbs");
//  
// app.use("/contact", function(_, response){
//      
//     response.render("contact.hbs", {
//         title: "Мои контакты",
//         emailsVisible: true,
//         emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
//         phone: "+1234567890"
//     });
// });
//  
// app.use("/", function(_, response){
//      
//     response.send("Главная страница");
// });
// app.listen(3000);
























// const express = require("express");
//  
// const app = express();
//  
// app.set("view engine", "ejs");
//  
// app.use("/contact", function(request, response){
//      
//     response.render("contact", {
//         title: "Мои контакты",
//         emailsVisible: true,
//         emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
//         phone: "+1234567890"
//     });
// });
// app.use("/", function(request, response){
//      
//     response.send("Главная страница");
// });
// app.listen(3000);