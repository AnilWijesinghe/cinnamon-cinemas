/**
 * validation inputs
 * @param seats
 * @param noOfSeats
 */
const validateRequestSeats = (noOfSeats)=>{
 // validate input no of seats between 1 and 3
 if(noOfSeats>3 || noOfSeats<1) throw new Error('Input should be in between 1 and 3');
};

/**
 * validate seats already filled
 * @param seats
 */
const validateAllSeatsFilled = (seats)=>{
 // check have none allocate seats
 const availableSeats = Object.entries(seats).filter(([seat, filled]) => filled===false);
 if(availableSeats.length===0) throw new Error('Seats are already filled in the theatre');
};

/**
 * check seats are available according to the input
 * @param seats
 * @param noOfSeats
 */
const validateSeatsAvailability = (seats,noOfSeats)=>{
 // check seats availability
 const availableSeats = Object.entries(seats).filter(([seat, filled]) => filled===false);
 if(availableSeats.length<noOfSeats) throw new Error('No seats available for customer input');
};


module.exports = {validateRequestSeats,
                  validateAllSeatsFilled,
                  validateSeatsAvailability};
