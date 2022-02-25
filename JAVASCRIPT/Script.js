var sound = new Audio();

sound.src = "../SRC/SOUND/ardilla.mp3";

function audioPS(){

    

    if(sound.duration > 0 && !sound.paused){

        sound.pause();

    }else{

        sound.play();

    }

}