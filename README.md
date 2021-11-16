# Read Me

>Implementation of 'Cinnamon Cinemas Movie Theatre Seating Challenge' assignment.

### Table of Contents
You're sections headers will be used to reference location of destination.

- [Business requirement](#Business-requirement)
- [Approach to solution by flow chart](#Approach-to-solution-by-flow-chart)
- [Technologies](#Technologies)
- [How to run](#How-to-run)
- [Assumptions](#Assumptions)
- [Future improvements](#Future-improvements)

## Business requirement
- Allocate seats based on a random integer "No of seats" between 1 and 3.
- Allocate required no of seats from the available seats starting from seat A1 and filling the auditorium from left to right, front to back.
- All of the seats are available for sale when program starts.
- The program should continue to allocate a random number of seats until it finds there are not enough seats to complete the request.
- Once there are not enough seats available to be allocated the the program can halt.

## Approach to solution by flow chart
https://drive.google.com/file/d/1I2RiIs-I5eYZlgpblDuEDfSUMSgqCie_/view?usp=sharing

## Technologies
- JavaScript ES6
- Jest as unit test framework
- Node v14.18.0

## How to run
- install Node Package Manager 
- Clone the project
- Move to the project path
- run 'npm clean install'
- run 'npm test'
- Check whether all tests are passed

## Assumptions
- When Seats store in the program, 'true' - seat allocated / 'false' - seat available

## Future improvements
- Add UI interface to show seat arrangements and availability.
- Add UI interface for customer input.

