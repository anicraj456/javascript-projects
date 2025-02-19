//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let fuelLevel = 0;
let astronautsAboard = 0;
let altitude = 0;


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  const input = require('readline-sync');
  fuelLevel = input.question('Please enter fuel level: ');
  while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
    fuelLevel = input.question("Invaild input!.Enter the starting fuel level: ");
    console.log(fuelLevel);
 }


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
 astronautsAboard = input.question('Please enter number of Astronauts:');
while(astronautsAboard>7){
  astronautsAboard= input.question('Invalid input. Please enter a number:');
  console.log("Astronaut aboard: " + astronautsAboard);
}
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (fuelLevel-100*astronautsAboard >= 0) {
  altitude += 50;
  fuelLevel -= 100*astronautsAboard;
  }
  console.log('Altitude: ' +altitude);

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
let output = `The shuttle gained an altitude of ${altitude} km.`;

if (altitude >= 2000) {
output += " Orbit achieved!";
}else{
  output += "Failed to reach orbit.";

}

console.log(output);