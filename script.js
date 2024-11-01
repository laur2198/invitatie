// Set the date we're counting down to (31 May 2025)
const countdownDate = new Date("May 31, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(function() {

    // Get the current date and time
    const now = new Date().getTime();

    // Find the time difference between now and the countdown date
    const timeRemaining = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the result in the corresponding elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over, display a message
    if (timeRemaining < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown").innerHTML = "The Big Day is Here!";
    }

}, 1000);



