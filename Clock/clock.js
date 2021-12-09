var wakeup = 7;
var noon = 12;
var lunch = 12;
var nap = lunch+3;
var partyTime;
var evening = 18;

var showTime = function()
{
  var clock = document.getElementById('clock');
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  if (hours >= noon)
  {
    meridian = "PM";
  }

  if (hours > noon)
  {
    hours = hours - 12;
  }

  if (hours < 10)
  {
    hours = "0" + hours;
  }

  if (minutes < 10)
  {
    minutes = "0" + minutes;
  }

  if(seconds<10)
  {
    seconds = "0" + seconds;
  }

  var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};

var updateClock  = function()
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://i.pinimg.com/originals/4e/86/86/4e8686f7ef038e941f81bc7504e6ab66.png";

  var timeEventJS = document.getElementById("timeEvent");
  var catImageJS = document.getElementById("catImage");

  if (time == partyTime)
  {
    image = "https://media.istockphoto.com/photos/nicelooking-attractive-gorgeous-glamorous-elegant-stylish-cheerful-picture-id1165055006?k=6&m=1165055006&s=612x612&w=0&h=X_d75QPcjQ0Zx-X2tTD4npQOIjD6lKXdDPqxJHuovhc=";
    messageText = "Let's Parrttyyy!";
  }
  else if (time == wakeup) {
    image = "https://previews.123rf.com/images/hermandesign2015/hermandesign20151901/hermandesign2015190100359/116415018-a-boy-wake-up-and-stretching-in-morning.jpg";
    messageText = "Get Up Dudee!";
  }
  else if (time == lunch) {
    image = "https://www.careeradvisor.asia/wp-content/uploads/2020/10/FI-FINAL-8-OCT-1200x800.png";
    messageText = "Its lunch time! Have some lunch.";
  }
  else if (time == nap) {
    image = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/06/06/12/napping-woman.jpg?width=1200";
    messageText = "Get a sound sleep. Sweet Dreams :) ";
  }
  else if (time < noon) {
    image = "https://chopra.brightspotcdn.com/35/7f/6af0bad84c0fa4134223c8d67986/photo-1458093257227-0f30303eb1f0.jpeg";
    messageText = "Good Morning Dudee!!";
  }
  else if (time >= evening)
  {
    image = "https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    messageText = "Good Evening Bro!";
  }
  else
  {
    image = "https://i.pinimg.com/originals/4e/86/86/4e8686f7ef038e941f81bc7504e6ab66.png";
    messageText = "Hey, Good Afternoon!";
  }

  console.log(messageText);
  timeEventJS.innerText = messageText;
  catImage.src = image;

  showTime();
};

updateClock();

var onesecond = 1000;
setInterval( updateClock, onesecond);

var partyButton = document.getElementById("party");

var partyEvent = function()
{
  if (partyTime<0)
  {
    partyTime = new Date().getHours();
    party.innerText = "Party Over!";
    party.style.backgroundColor = "#0A8DAB";
  }
  else{
    partyTime = -1;
    party.innerText = "Its PARTY Time";
    party.style.backgroundColor = "#111";
  }
};

partyButton.addEventListener('click', partyEvent);
partyEvent();

var WakeUpTimeSelector = document.getElementById('Wakeup');
var WakeupEvent = function()
{
  wakeup = WakeUpTimeSelector.value;
};
WakeUpTimeSelector.addEventListener("change",WakeupEvent);


var LunchTimeSelector = document.getElementById('Lunch');
var LunchEvent = function()
{
  lunch = LunchTimeSelector.value;
};
LunchTimeSelector.addEventListener("change",LunchEvent);

var NapTimeSelector = document.getElementById('Nap');
var NapEvent = function()
{
  nap = NapTimeSelector.value;
};
NapTimeSelector.addEventListener("change",NapEvent);
