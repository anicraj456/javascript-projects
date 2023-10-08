
let launchcode = {
    organization : "nonprofit",
    executiveDirector : "Jeff",
    percentageCoolEmployees : 100,
    programsOffered : ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput : function(num){
        let quotes = {
            2 : "Launch",
            3 : "Code",
            5 : "Rocks"
        };
        let result = "";
        for(let divide in quotes){
            if (num % divide === 0){
                if(divide == 5 && result.length > 0){
                   result += " ";
                }
                result += quotes[divide];
            }
        }
        /*if(num % 2 === 0){
            result += "Launch";
        }
         if(num % 3 === 0){
            result += "Code";
        }
         if(num % 5 === 0){
            if(result.length > 0){
                result += " ";
             }
            result += "Rocks";
        }*/

        if(result.length === 0){
            result = "Rutabagas! That doesn't work.";
        }else{
            result += "!";
        }
        if(result === "Launch Rocks!"){
            result += " (CRASH!!!!)";
        }
        return result;
    }
};
module.exports = launchcode;

