const randomPick = require('./randomPick');


test("No of seats randomly generate; between 1 and 3",()=>{
    //Arrange
    //Act
    const getRandomNoOfSeats = randomPick.getRandomNoOfSeats();
    expect(getRandomNoOfSeats).toBe([1,2,3].includes(getRandomNoOfSeats));
});
