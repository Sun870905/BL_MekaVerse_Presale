exponential = 400;

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const totalsec = Math.floor(total / 1000);
    localStorage.setItem('counterSetting', totalsec);



    if (localStorage.getItem('counterSetting') === null) {
        total = total + 1;
    }


    if (localStorage.getItem('tickets') === null) {
        localStorage.setItem('tickets', 512);
    } else if (localStorage.getItem('tickets') == 0) {

    } else {
        exponential = localStorage.getItem('tickets');
        exponential = exponential * 0.99;
        exponential = exponential.toFixed(0);
        localStorage.setItem('tickets', exponential);
    }



    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function initializeClock(id, endtime) {

    const ticketCount = document.getElementById('ticket-count');

    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        const t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        ticketCount.innerHTML = localStorage.getItem('tickets')

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}




if (localStorage.getItem('counterSetting') === null) {
    timeInSec = 122;
    localStorage.setItem('counterSetting', 122);
} else if (localStorage.getItem('counterSetting') == 0) {
    timeInSec = 120 * 60;
    localStorage.setItem('counterSetting', 120 * 60);
} else {
    timeInSec = localStorage.getItem('counterSetting');
}

const currentTime = Date.parse(new Date());
const deadline = new Date(currentTime + timeInSec * 1000);

initializeClock('clockdiv', deadline);