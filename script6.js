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





























