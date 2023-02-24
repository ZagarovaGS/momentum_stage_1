const quote=document.querySelector('.quote');
const author=document.querySelector('.author');
const changeQuoteBtn=document.querySelector('.change-quote');

const getRandomNum=(max)=>{
    let randNum=Math.floor(Math.random() * max);
    return randNum;
};

const quotes='data.json';
const res=await fetch(quotes);
const data=res.json();

async function getQuotes(){
   data.then(data=>{
    const count=data.length;
    const num=getRandomNum(count);
    data.forEach((element, index) => {
        if(index===num){
        quote.textContent=element.text;
        author.textContent=element.author;
        };
   });
    });
};

export {getQuotes, changeQuoteBtn};