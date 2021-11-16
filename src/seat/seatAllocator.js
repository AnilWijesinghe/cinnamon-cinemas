const validation = require('../validation/cinnamonValidation');
const randomPick = require('./randomPick');
// Theatre seats Arrangements ; false - available true - filled
let seats = {A1:false,A2:false,A3:false,A4:false,A5:false,B1:false,B2:false,B3:false,B4:false,B5:false,C1:false,C2:false,C3:false,C4:false,C5:false};


const allocateSeats = (noOfSeats)=>{
    let allocatedSeats = '';
    validation.validateAllSeatsFilled(seats);
    validation.validateRequestSeats(noOfSeats);
    validation.validateSeatsAvailability(seats,noOfSeats);
    Object.entries(seats).forEach(([seat, filled])=>{
        if(!filled){
            if(noOfSeats>0){
                allocatedSeats = allocatedSeats.concat(' '+seat);
                seats[seat] = true;
                noOfSeats = noOfSeats-1;
            }
        }
    });
    return 'Your seats are'.concat(allocatedSeats.toString());
};

module.exports = {allocateSeats};
