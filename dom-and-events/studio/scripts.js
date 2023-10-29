// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load",function(){
    let rangeMiles = 0;
    let rocketPosX = 0;
    let rocketPosY = 0;

    const takeoffButton = document.getElementById('takeoff');
    const landButton = document.getElementById('landing');
    const abortMissionButton = document.getElementById('missionAbort');
   

    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const rocket = document.getElementById('rocket');

    takeoffButton.addEventListener('click',function(){
        let shuttleTakeoff=window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(shuttleTakeoff){
            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.style.backgroundColor="blue";
            rangeMiles = 10000;
            spaceShuttleHeight.innerHTML = rangeMiles;   
        }
    });

    landButton.addEventListener('click',function(){
       window.alert("The shuttle is landing. Landing gear engaged.");
       flightStatus.innerHTML = "The shuttle has landed.";
       shuttleBackground.style.backgroundColor="green";
       rangeMiles = 0;
       spaceShuttleHeight.innerHTML = rangeMiles; 
       rocketPosX = 0 ;
       rocketPosY = 0;
       rocket.style.marginLeft = rocketPosX + "px";
       rocket.style.marginBottom = rocketPosY + "px";
       
    });

    abortMissionButton.addEventListener('click',function(){
        let checkMission=window.confirm("Confirm that you want to abort the mission.");

        if(checkMission){
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style.backgroundColor="green";
            rangeMiles = 0;
            spaceShuttleHeight.innerHTML = rangeMiles; 
            rocketPosX = 0;
            rocketPosY = 0;
            rocket.style.marginLeft = rocketPosX + "px";
            rocket.style.marginBottom = rocketPosY + "px";
        }
    });

    document.addEventListener('click',function(event){
        let backgroundWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));

        if(event.target.id === "up" && rangeMiles < 250000){
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            rangeMiles += 10000;
            spaceShuttleHeight.innerHTML = rangeMiles;

        }
        if(event.target.id === "down" && rangeMiles > 0){
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            rangeMiles -= 10000;
            spaceShuttleHeight.innerHTML = rangeMiles;
            
        }
        if(event.target.id === "right" && rocketPosX < (backgroundWidth / 2 - 40)){
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';
            
        }
        if(event.target.id === "left" && rocketPosX > -(backgroundWidth / 2 - 40)){
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';   
        }

    });
});


