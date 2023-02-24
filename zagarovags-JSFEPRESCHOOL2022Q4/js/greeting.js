 const greeting=document.querySelector('.greeting');
 const name=document.querySelector('.name');

const getTimeOfDay=()=>{
    const date=new Date();
    setTimeout(getTimeOfDay, 1000);
    const hours=date.getHours(); 
    let timeOfDay='morning';
    if(hours>=12 && hours<18){
       timeOfDay='afternoon';   
    };
    if(hours>=18 && hours<=23){
       timeOfDay='evening';
    }
    if(hours>=0 && hours<6){
        timeOfDay='night';
    };
    return timeOfDay;
};

const timeOfDay=getTimeOfDay();

const showGreetihg=()=>{   
    greeting.textContent=`Good ${timeOfDay}`;
};

const setLocalStorage=()=>{
   localStorage.setItem('name', name.value);
};

const getLocalStorage=()=>{
    if (localStorage.getItem('name')){
        name.value=localStorage.getItem('name');
    };
};



export {showGreetihg, setLocalStorage, getLocalStorage, timeOfDay, getTimeOfDay};