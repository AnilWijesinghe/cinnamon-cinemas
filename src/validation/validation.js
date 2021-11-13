const inputValidation = (noOfSeats)=>{
 if(noOfSeats>3 || noOfSeats<1) throw new Error('Input should be in between 1 and 3');
};

module.exports = {inputValidation};
