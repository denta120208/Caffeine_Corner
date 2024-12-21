// Function to start countdown timer
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
            // You can remove "Expired" here, but it's better handled in the pop-up logic
        }
    }, 1000);
}

// Start countdown for the payment timer (15 seconds)
window.onload = function () {
    startCountdown('timer1', 15);

    const popup = document.getElementById('popup');

    // Show the pop-up 15 seconds after the page loads
    setTimeout(function() {
        popup.classList.add('show');

        // Update the status and hide "Expired"
        const statusElement = document.getElementById('paymentStatus');
        statusElement.textContent = 'Lunas'; // Change status to Lunas
        statusElement.classList.add('lunas'); // Apply white color

        // Clear the timer text
        document.getElementById('timer1').textContent = '';
    }, 15000); // 15 seconds

    // Hide the pop-up 3 seconds after it appears
    setTimeout(function() {
        popup.classList.remove('show');
    }, 18000); // 18 seconds (15s + 3s for display duration)
};
