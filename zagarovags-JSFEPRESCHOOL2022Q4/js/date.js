const time=document.querySelector('.time');
const nowDate=document.querySelector('.date');

const weekDays={
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
}

const monthes={
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',  
    5: 'June', 
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
};

const getWeekDay=()=>{
    const date=new Date();
    const weekDay=weekDays[date.getDay()];
    return weekDay;
}

const getCurrentMonth=()=>{
    const date=new Date;
    return monthes[date.getMonth()];
}

const showDate=()=>{
    const date = new Date();
    const weekDay=getWeekDay();
   const currentDate=weekDay+', '+ getCurrentMonth()+' '+date.getDate();
    nowDate.textContent=currentDate;
}

const showTime=()=>{
    const date=new Date;
    const currentDate=date.toLocaleTimeString();
    time.textContent=currentDate;
    setTimeout(showTime, 1000);
    showDate();
};



export {showTime};