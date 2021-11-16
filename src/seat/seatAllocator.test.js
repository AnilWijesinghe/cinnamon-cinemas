const seatAllocator = require('./seatAllocator');
const validation = require('../validation/cinnamonValidation');
const randomPick = require('./randomPick');

const randomNofSeats = jest.spyOn(randomPick, 'getRandomNoOfSeats');
const validateAllSeatsFilled = jest.spyOn(validation, 'validateAllSeatsFilled');
const validateNoOFSeatsInput = jest.spyOn(validation, 'validateRequestSeats');
const validateSeatsAvailability = jest.spyOn(validation, 'validateSeatsAvailability');

describe("Seat allocator flow",()=>{
    test("1st input",()=>{
        //Arrange
        //const noOfSeats = randomNofSeats.mockImplementation(() => 3);
        const noOfSeats = 3;
        let seats = {A1:true,A2:true,A3:true,A4:false,A5:false,B1:false,B2:false,B3:false,B4:false,B5:false,C1:false,C2:false,C3:false,C4:false,C5:false};
        //Act
        const seatAllocate = seatAllocator.allocateSeats(noOfSeats);
        // Assert
        expect(validateAllSeatsFilled)
            .toHaveBeenCalledWith(seats);
        expect(validateAllSeatsFilled)
            .toHaveBeenCalledTimes(1);
        expect(validateNoOFSeatsInput)
            .toHaveBeenCalledWith(noOfSeats);
        expect(validateNoOFSeatsInput)
            .toHaveBeenCalledTimes(1);
        expect(validateSeatsAvailability)
            .toHaveBeenCalledWith(seats,noOfSeats);
        expect(validateSeatsAvailability)
            .toHaveBeenCalledTimes(1);
        expect(seatAllocate).toBe('Your seats are A1 A2 A3');
    })
});

