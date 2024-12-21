function startCountdown(elementId, duration) {
    var timer = duration, minutes, seconds;
    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById(elementId).textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            document.getElementById(elementId).textContent = "Expired";
        }
    }, 1000);
}

// Start countdown for the payment timer (15 seconds)
window.onload = function () {
    startCountdown('timer1', 15);
};
