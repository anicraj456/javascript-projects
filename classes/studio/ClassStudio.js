//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor (name, mass, scores){
        this.name = name,
        this.mass = mass,
        this.scores = scores;
    }
    addscore(newScores){
    this.scores.push(newScores)
    }

    average(){
        let total = 0;
        let aveScore = 0;
        for(let i =0;i < this.scores.length;i++){
            total = total + this.scores[i];
        }
        aveScore = Math.round(total / this.scores.length *10)/10;
        //console.log("Merry Average Score: " + aveScore);
        return aveScore;
    }

    status(){
        if(this.average >= 90){
            return "Accepted ";
        }else if(this.aveScore >= 80){
            return "Reserve";
        }else if(this.aveScore >= 70){
            return "Probationary";
        }else {
            return "Rejected";
        }    
    }
    }   

let bubba = new CrewCandidate ("Bubba Bear", 135, [88,85,90]);
let merry = new CrewCandidate ("Merry Maltese", 1.5, [93,88,97]);
let gator = new CrewCandidate ("Glad Gator", 225, [75,78,62]);

console.log(bubba);
console.log(merry);
console.log(gator);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
bubba.addscore(83);
//console.log("Bubba new scores: " + bubba.scores);
//merry.average();

let candidates = [bubba,merry,gator];
for(let i = 0;i<candidates.length;i++){
    console.log(`${candidates[i].name} earned an average test score of ${candidates[i].average()}% and has a status of ${candidates[i].status()}.`);
}

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.