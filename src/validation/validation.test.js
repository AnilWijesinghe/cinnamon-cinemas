const validation = require('./validation');


test("check input in between 1 and 3",()=>{
    // Arrange
    const noOfSeats = 5;
    // Act and Assert
    expect(()=>validation.inputValidation(noOfSeats)).toThrow('Input should be in between 1 and 3');
});

test("Validate seats are already filled",()=>{
    //Arrange
    let seats = {A1:true,A2:true,A3:true,A4:true,A5:true,B1:true,B2:true,B3:true,B4:true,B5:true,C1:true,C2:true,C3:true,C4:true,C5:true};
    const noOfSeats = 2;
    //Act and Assert
    expect(()=>validation.inputValidation(seats,noOfSeats)).toThrow('Seats are already filled in the theatre')
});
