const validation = require('./validation');


test("check input in between 1 and 3",()=>{
    // Arrange
    const noOfSeats = 5;

    // Act and Assert
    expect(()=>validation.inputValidation(noOfSeats)).toThrow('Input should be in between 1 and 3');


});
