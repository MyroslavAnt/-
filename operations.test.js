const operations = require("./operations");
 
it("should multiply two numbers", function(){
     
    const expectedResult = 15;
    const result = operations.multiply(3, 5);
    if(result!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
});