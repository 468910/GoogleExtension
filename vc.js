var numOfVideos = 9;

function vidplay() {
    var button = document.getElementById("play");
    var vids = [];
    
    for(var i = 0; i < numOfVideos; i++){
        vids.push(document.getElementById("vid" + i));
        console.log(vids.length);
    }

 
    if(vids[0].paused){
        for(var i = 0; i < numOfVideos; i++){
            vids[i].play();
        }
        button.textContent = "||"; 
    }else{
        for(var i = 0; i < numOfVideos; i++){
            vids[i].pause();
        }
        button.textContent = ">";
   }
}
