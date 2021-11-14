/**
 * randomly generate number for given range
 * @param maxNoOfSeats
 * @param minNofSeats
 * @returns {*}
 */
const getRandomNoOfSeats = (maxNoOfSeats,minNofSeats)=>{
    return Math.floor(Math.random() * (maxNoOfSeats - minNofSeats) + minNofSeats);
};

module.exports = {getRandomNoOfSeats};
