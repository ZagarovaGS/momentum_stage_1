import { timeOfDay } from './greeting.js';

const sliderNextBtn=document.querySelector('.slide-next');
const sliderPrevBtn=document.querySelector('.slide-prev');
const body=document.querySelector('body');

const max=20;
const getRandom=(max)=>{
    let randNum=Math.floor(Math.random() * max);
    if(randNum==0){
        randNum=getRandom(max);
    } else
    if(randNum<10){
        randNum='0'+randNum;
    }
    return randNum;
}
let randomImg=getRandom(max);

const setBg=(imgNumber)=>{
const imgLink=`https://raw.githubusercontent.com/ZagarovaGS/stage1-tasks/assets/images/${timeOfDay}/${imgNumber}.jpg`;
return imgLink;
}

const getSliderNext=()=>{
    let nextImg=0;

    if(randomImg<9){
       const randomArr=String(randomImg).split('');
        let currentNext=Number(randomArr[randomArr.length-1])+1;
        nextImg='0'+String(currentNext);
        randomImg=Number(nextImg);
    } else{
        nextImg=Number(randomImg)+1;
        randomImg=Number(nextImg);
        if (randomImg==20){
            randomImg=1;
        }
};  
return nextImg;
};

const getSlidePrev=()=>{
    let nextImg=0;
   
        if(randomImg<10){
           const randomArr=String(randomImg).split('');
            let currentNext=Number(randomArr[randomArr.length-1])-1;
            nextImg='0'+String(currentNext);
            randomImg=Number(nextImg);
            if(randomImg==1){
                randomImg=20
            }
        } else{
            if(randomImg<11){
                nextImg='0'+(Number(randomImg)-1);
            } else
            nextImg=Number(randomImg)-1;
            randomImg=Number(nextImg);
        }
        return nextImg;
}


const sliderNextHendler=()=>{
    const nextSlider=getSliderNext();
    let imgLink=setBg(nextSlider);
    body.style.backgroundImage = `url(${imgLink})`;
}

const sliderPrevHendler=()=>{
    const prevSlider=getSlidePrev();
    let imgLink=setBg(prevSlider);
    body.style.backgroundImage = `url(${imgLink})`;
}

export {setBg, randomImg, sliderNextBtn,  sliderNextHendler,  sliderPrevBtn, sliderPrevHendler};