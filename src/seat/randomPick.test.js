const randomPick = require('./randomPick');


test("No of seats randomly generate; between 1 and 3",()=>{
    //Arrange
    const minNoSeats = 1;
    const maxNoSeats = 3;
    //Act
    const getRandomNoOfSeats = randomPick.getRandomNoOfSeats(minNoSeats,maxNoSeats);
    expect(getRandomNoOfSeats).toBe([1,2,3].includes(getRandomNoOfSeats));
});
