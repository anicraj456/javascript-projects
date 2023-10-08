// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("should return organization as non-profit",function(){
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("should return executiveDirectror as Jeff",function(){
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("should return percentage of cool employee",function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("should return value of program offered",function(){
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("should return Launch,if number divisible only by 2",function(){
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });

  test("should return Code,if number divisible only by 3",function(){
    expect(launchcode.launchOutput(3)).toBe("Code!");
  });

  test("should return Rocks,if number divisible only by 5",function(){
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });

  test("should return LaunchCode,if number divisible  by 2 and 3",function(){
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });
  
  test("should return Code Rocks,if number divisible  by 3 and 5",function(){
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });

  //changing to new condition and add "Crash.."

  test("should return Launch Rocks,if number divisible  by 2 and 5",function(){
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
  });

  test("should return LaunchCode Rocks,if number divisible  by 2,3 and 5",function(){
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });

  test("should return LaunchCode Rocks,if number  not divisible  by 2,3 and 5",function(){
    expect(launchcode.launchOutput(19)).toBe("Rutabagas! That doesn't work.");
  });
});