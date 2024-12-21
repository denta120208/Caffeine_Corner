const popup = document.getElementById('popup');
    
// Show the pop-up 15 seconds after the page loads
setTimeout(function() {
    popup.classList.add('show');
}, 18000); // 15 seconds

// Hide the pop-up 3 seconds after it appears
setTimeout(function() {
    popup.classList.remove('show');
}, 350000); // 18 seconds (15s + 3s for display duration)
