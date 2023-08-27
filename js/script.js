const btnStart=document.querySelector('.start');
const btnStop=document.querySelector('.stop');
const btnReset=document.querySelector('.reset');

let hrs=min=sec=ms=0,startTimer,amount,startTime;

btnStart.addEventListener('click',()=>{

  btnStart.classList.add('start-active');
  btnStop.classList.remove('stop-active');
  startTime = new Date();

  startTimer=setInterval(()=>{
    ms++;//ms=ms+1;
    if(ms==100){
      sec++;
      ms=0;
    }
    if(sec==60){
      min++;
      sec=0;
    }
    if(min==60){
      hrs++;
      min=0;
    }
    updateDisplay();
  },10);
});

btnStop.addEventListener('click',()=>{
  clearInterval(startTimer);
  btnStart.classList.remove('start-active');
  btnStop.classList.add('stop-active');
  var stopTime = new Date();
  var difference = stopTime.getTime() - startTime.getTime();
  amount = (difference / 1000 /60 /60)*120;
  var decPart = (amount+"").split(".")[1].slice(0,2);
  var pamount= Math.floor(amount);
  var damount = pamount;
  if (pamount < 100) {
    if (pamount < 10){
      damount = '00'+pamount;
    } else {
      damount = '0'+pamount;
    }
  }
  document.querySelector('.rs').innerText=damount;
  document.querySelector('.ps').innerText=decPart;
});

btnReset.addEventListener('click',()=>{
  hrs=min=sec=ms=0;
  clearInterval(startTimer);
  updateDisplay();
  btnStart.classList.remove('start-active');
  btnStop.classList.remove('stop-active');
  document.querySelector('.rs').innerText='000';
  document.querySelector('.ps').innerText='00';
});


function updateDisplay(){
  //Formated Display
  phrs=hrs<10?'0'+hrs:hrs;
  pmin=min<10?'0'+min:min;
  psec=sec<10?'0'+sec:sec;
  pms=ms<10?'0'+ms:ms;
  //Output
  document.querySelector('.hrs').innerText=phrs;
  document.querySelector('.min').innerText=pmin;
  document.querySelector('.sec').innerText=psec;
  document.querySelector('.ms').innerText=pms;
}
