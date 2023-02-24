import {showTime} from './date.js';
import { showGreetihg, setLocalStorage, getLocalStorage } from './greeting.js';
import { setBg, randomImg, sliderNextBtn, sliderNextHendler, sliderPrevBtn, sliderPrevHendler} from './slader.js';
import { getWeather, city } from './weather.js';
import { getQuotes, changeQuoteBtn } from './quote.js';
import {  playAudio, playPauseBtn, playNextBtn, playPrevBtn, nextBtnHendler, prevBtnHendler } from './player.js';
import { playList } from './playList.js';


const body=document.querySelector('body');

showTime();
showGreetihg();
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
const imgLink=setBg(randomImg);

window.addEventListener('load', ()=>{
    body.style.backgroundImage = `url(${imgLink})`;
    body.style.imgDecoding="async";
    if (localStorage.getItem('cityName')){
        city.value=localStorage.getItem('cityName');
      //  getWeather(city.value);
    } else{
      //  getWeather('Minsk');
        city.value='Minsk';
    }
});

sliderNextBtn.addEventListener('click', sliderNextHendler);
sliderPrevBtn.addEventListener('click', sliderPrevHendler);

city.onchange=(e)=>{
    let cityName=e.target.value
    console.log('input value', cityName);
  //  getWeather(cityName);
    localStorage.setItem('cityName', cityName);
};

getQuotes();

changeQuoteBtn.addEventListener('click', getQuotes);

playPauseBtn.addEventListener('click', playAudio);

playNextBtn.addEventListener('click', nextBtnHendler);

playPrevBtn.addEventListener('click', prevBtnHendler);