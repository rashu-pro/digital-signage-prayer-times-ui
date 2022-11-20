//=== show digital clock
function showTime(){
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session = "AM";

  if(h === 0){
    h = 12;
  }

  if(h > 12){
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  let timeString;
  timeString = `<span class="me-1">${h}</span>:<span class="mx-1">${m}</span>:<span class="ms-1 me-1">${s}</span><span>${session}</span>`;
  document.getElementById('show-time').innerHTML = timeString;
  setTimeout(showTime, 1000);
}
showTime();

function showDate(){
  let dateObj = new Date();
  let month = dateObj.getUTCMonth(); //months from 1-12
  let day = dateObj.getUTCDate();

  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayName = days[dateObj.getDay()];

  console.log('day: ', day);
  if(month===0){
    month = "January";
  }else if(month === 1){
    month = "February";
  }else if(month === 2){
    month = "March";
  }else if(month === 3){
    month = "April";
  }else if(month === 4){
    month = "May";
  }else if(month === 5){
    month = "June";
  }else if(month === 6){
    month = "July";
  }else if(month === 7){
    month = "August";
  }else if(month === 8){
    month = "September";
  }else if(month === 9){
    month = "October";
  }else if(month === 10){
    month = "November";
  }else if(month === 11){
    month = "December";
  }else{

  }

  let dateString;
  dateString = `<span class="day text-uppercase"> ${dayName}, </span> <span class="month">${day}<sup>th</sup> <span class="text-uppercase">${month}</span> </span>`;
  console.log(dateString);

  document.getElementById('show-date').innerHTML = dateString;
}
showDate();

