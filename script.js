let progress=document.getElementById("progress");
let song=document.getElementById("sing");
let  playIcon=document.getElementById("playIcon");

song.onloadedmetadata=function(){
  progress.value=song.currentTime;
}

function playSong(){
  if(playIcon.innerHTML==="play_arrow"){
    song.play();
    playIcon.innerHTML="pause_circle";
  }
  else{
    song.pause();
    playIcon.innerHTML="play_arrow";
  }
}

if(song.play()){
  setInterval(()=>{
    progress.value=song.currentTime;
  },500);
}

progress.onchange=function (){
  song.play();
  song.currentTime=progress.value;
  playIcon.innerHTML="pause_circle";
}