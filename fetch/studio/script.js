//TODO: Add Your Code Below
window.addEventListener("load", function(){
    const contianer = document.getElementById('container');
   fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    console.log(response);
    response.json().then(function(data){
    console.log(data);

    for (let i=0;i<data.length;i++){
        let astronauts = data[i];
        contianer.innerHTML += `
        <div class="astronaut">
           <div class="bio">
              <h3>${astronauts.firstName} ${astronauts.lastName}</h3>
                <ul>
                    <li>Hours in space: ${astronauts.hoursInSpace}</li>
                    <li>Active: ${astronauts.active}</li>
                    <li>Skills: ${astronauts.skills.join(", ")}</li>
                </ul>
            </div>
        <img class="avatar" src="${astronauts.picture}">
        </div>    `
     }
    });
  });
});   
