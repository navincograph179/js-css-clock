const secondHand = document.getElementById('seconds');
const minuteHand = document.getElementById('minutes');
const hourHand = document.getElementById('hours');

const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/60) * 360) + 182;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + 180;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    const hours = now.getHours();
    const hourDegrees = ((hours / 60) * 360) + 120;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};
setInterval(() => {
    setDate()
}, 1000);

// or We can write setInterval(setDate, 1000);