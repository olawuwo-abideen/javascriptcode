let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
const age = 19;

//control flow

if (registeredEarly && age > 18) {
  console.log (`Race will begin at 9:30 am and your race number is ${raceNumber}`);
} 
else if (!registeredEarly && age > 18) {
  console.log (`Race will begin at 11:00 am and your race number is ${raceNumber}`);
}
else if (age < 18) {
console.log (`Race will begin at 12:30 am and your race number is ${raceNumber}`);
}
else 
console.log('Go and register at the registration table')