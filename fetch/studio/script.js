//TODO: Add Your Code Below
window.addEventListener("load", function(){
    const contianer = document.getElementById('container');
   fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    //console.log(response);
    response.json().then(function(astFile){
    console.log(astFile);
    astFile.sort(function(a,b){
      return a.hoursInSpace < b.hoursInSpace?1 :-1;
      //return a.hoursInSpace > b.hoursInSpace?1 :-1; //for least to most
    });
    
    for (let i=0;i<astFile.length;i++){
        let astronauts = astFile[i];
        if (astronauts.active === true){
          activeColor = "green";
        }else{
          activeColor = "";
        }
        contianer.innerHTML += `
        <div class="astronaut">
           <div class="bio">
              <h3>${astronauts.firstName} ${astronauts.lastName}</h3>
                <ul>
                    <li>Hours in space: ${astronauts.hoursInSpace}</li>
                    <li class="activeColor">Active: ${astronauts.active}</li>
                    <li>Skills: ${astronauts.skills.join(", ")}</li>
                </ul>
            </div>
        <img class="avatar" src="${astronauts.picture}">
        </div>    `
     }
    });
  });
});   

