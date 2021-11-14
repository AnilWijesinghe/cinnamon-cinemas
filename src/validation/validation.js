/**
 * validation inputs
 * @param seats
 * @param noOfSeats
 */
const inputValidation = (noOfSeats)=>{
 // validate input no of seats between 1 and 3
 if(noOfSeats>3 || noOfSeats<1) throw new Error('Input should be in between 1 and 3');
};

const seatsAlreadyFilledValidation = (seats)=>{
 // check have none allocate seats
 const availableSeats = Object.entries(seats).filter(([seat, filled]) => filled===false);
 if(availableSeats.length===0) throw new Error('Seats are already filled in the theatre');
};


module.exports = {inputValidation,seatsAlreadyFilledValidation};
