let dayBox = document.getElementById('day-box');
let hrBox = document.getElementById('hr-box');
let minBox = document.getElementById('min-box');
let secBox = document.getElementById('sec-box');
// let endDate = new Date(year, month, date, hours, minutes);
let endDate = new Date(2022,0,1,00,00);
console.log(endDate);
let endTime = endDate.getTime();

function countDown() {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endDate - todayTime;
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;

    let addZeros = (num) => (num < 10 ? `0${num}` : num);
    if(endTime < todayTime){
        clearInterval(i);
        document.querySelector('.countdown').innerHTML = '<h1>Happy New Year</h1>';
        //getting confetti effect from confetti.js
        const startit = () => {
            setTimeout(function () {
                confetti.start();
            }, 1000)
        }
        const stopit = () => {
            setTimeout(function () {
                confetti.stop();
            }, 9000)
        }
        startit();
        stopit();
    }
    else{
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

        // console.log(daysLeft,hrsLeft,minsLeft,secsLeft);
        dayBox.textContent = addZeros(daysLeft);
        hrBox.textContent = addZeros(hrsLeft);
        minBox.textContent = addZeros(minsLeft);
        secBox.textContent = addZeros(secsLeft);
    }
    let expireContent = new Date(2022,0,2,00,00);
    if(expireContent < todayTime){
        document.querySelector('.countdown').innerHTML = '<h1>Countdown is Expired</h1>';
    }
}
let i = setInterval(countDown,1000)
countDown()