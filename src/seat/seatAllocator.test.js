const seatAllocator = require('./seatAllocator');
const validation = require('../validation/cinnamonValidation');
const randomPick = require('./randomPick');

const randomNofSeats = jest.spyOn(randomPick, 'getRandomNoOfSeats');
const validateAllSeatsFilled = jest.spyOn(validation, 'validateAllSeatsFilled');
const validateNoOFSeatsInput = jest.spyOn(validation, 'validateRequestSeats');
const validateSeatsAvailability = jest.spyOn(validation, 'validateSeatsAvailability');

describe("Seat allocator flow",()=>{
    test("Edge case first seat allocation",()=>{
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
    });
    test("Edge case A and B row seat allocate",()=>{
        //Arrange
        const noOfSeats = 3;
        let seats = {A1:true,A2:true,A3:true,A4:true,A5:true,B1:true,B2:false,B3:false,B4:false,B5:false,C1:false,C2:false,C3:false,C4:false,C5:false};
        //Act
        const seatAllocate = seatAllocator.allocateSeats(noOfSeats);
        // Assert
        expect(validateAllSeatsFilled)
            .toHaveBeenCalledWith(seats);
        expect(validateAllSeatsFilled)
            .toHaveBeenCalledTimes(2);
        expect(validateNoOFSeatsInput)
            .toHaveBeenCalledWith(noOfSeats);
        expect(validateNoOFSeatsInput)
            .toHaveBeenCalledTimes(2);
        expect(validateSeatsAvailability)
            .toHaveBeenCalledWith(seats,noOfSeats);
        expect(validateSeatsAvailability)
            .toHaveBeenCalledTimes(2);
        expect(seatAllocate).toBe('Your seats are A4 A5 B1');
    })
    test("edge case, B row seat allocate",()=>{
        //Arrange
        const noOfSeats = 3;
        let seats = {A1:true,A2:true,A3:true,A4:true,A5:true,B1:true,B2:true,B3:true,B4:true,B5:false,C1:false,C2:false,C3:false,C4:false,C5:false};
        //Act
        const seatAllocate = seatAllocator.allocateSeats(noOfSeats);
        // Assert
        expect(validateAllSeatsFilled)
            .toHaveBeenCalledWith(seats);
        expect(validateAllSeatsFilled)
            .toHaveBeenCalledTimes(3);
        expect(validateNoOFSeatsInput)
            .toHaveBeenCalledWith(noOfSeats);
        expect(validateNoOFSeatsInput)
            .toHaveBeenCalledTimes(3);
        expect(validateSeatsAvailability)
            .toHaveBeenCalledWith(seats,noOfSeats);
        expect(validateSeatsAvailability)
            .toHaveBeenCalledTimes(3);
        expect(seatAllocate).toBe('Your seats are B2 B3 B4');
    })
    test("edge case, B row and C ror seat allocate",()=>{
        //Arrange
        const noOfSeats = 3;
        let seats = {A1:true,A2:true,A3:true,A4:true,A5:true,B1:true,B2:true,B3:true,B4:true,B5:true,C1:true,C2:true,C3:false,C4:false,C5:false};
        //Act
        const seatAllocate = seatAllocator.allocateSeats(noOfSeats);
        // Assert
        expect(validateAllSeatsFilled)
            .toHaveBeenCalledWith(seats);
        expect(validateAllSeatsFilled)
            .toHaveBeenCalledTimes(4);
        expect(validateNoOFSeatsInput)
            .toHaveBeenCalledWith(noOfSeats);
        expect(validateNoOFSeatsInput)
            .toHaveBeenCalledTimes(4);
        expect(validateSeatsAvailability)
            .toHaveBeenCalledWith(seats,noOfSeats);
        expect(validateSeatsAvailability)
            .toHaveBeenCalledTimes(4);
        expect(seatAllocate).toBe('Your seats are B5 C1 C2');
    })
});

