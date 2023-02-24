import { playList } from './playList.js';

const playPauseBtn=document.querySelector('.play');
const playNextBtn=document.querySelector('.play-next');
const playPrevBtn=document.querySelector('.play-prev');
const playItem=document.querySelectorAll('.play-item');

let isPlay = false;

const audio = new Audio();

function playAudio() {
 
  let n=0;
  function start(){
    playItem.forEach(item=>{
        item.classList.remove('item-active');
    });   

    if(Number(audio.currentTime>=38)){
      isPlay=false;
    }
   
    if(!isPlay){
        playPauseBtn.classList.add('pause');  
        audio.src=playList[n].src;
        audio.play();  
        playItem.forEach((item, index)=>{
          if(index==n){
            item.classList.add('item-active');
          }
        });   
        n++;
        isPlay=true;
    }
        else {
        audio.pause();
        audio.currentTime=0;
        playPauseBtn.classList.remove('pause');
        isPlay=false;
       };
  
    if(n==4){
      n=0;
        };
        console.log('isPlay', isPlay);
        console.log(audio.currentTime);
        console.log(n) 
        localStorage.setItem('songNumber', n);
  };
    start();
    setInterval(start, 39000);
    
 };
//--------------------------------------------------
 let n=Number(localStorage.getItem('songNumber'));  
 const nextBtnHendler=()=>{

  const start=()=>{
    
    playItem.forEach(item=>{
      item.classList.remove('item-active');
  });   
    playPauseBtn.classList.add('pause');  
    audio.src=playList[n].src;
    audio.play();  
    playItem.forEach((item, index)=>{
      if(index==n){
        item.classList.add('item-active');
      }
    });   
    n++;
    if(n==4){
      n=0
    }
  };
  start();
  setInterval(start, 39000)
 };
 //----------------------------------------------------------

n--;

 const prevBtnHendler=()=>{
  
  const start=()=>{
    
    n--;
    if(n==-1){n=3};
    playPauseBtn.classList.add('pause');  
    playItem.forEach(item=>{
      item.classList.remove('item-active');
  }); 
   
    audio.src=playList[n].src;
    playItem.forEach((item, index)=>{
      console.log('pN', n); 
      if(index==n){
        item.classList.add('item-active');
      }
    }); 
    audio.play(); 
  };
  start();
  setInterval(start, 39000);
 }
 

    
 
   
export {playAudio, playPauseBtn, playNextBtn, playPrevBtn, nextBtnHendler, prevBtnHendler};