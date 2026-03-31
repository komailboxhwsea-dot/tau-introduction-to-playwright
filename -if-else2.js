let showTime = 7;  // 7:00 AM in 24hr format

if (showTime >= 18) {
    console.log("Night Showing!");
} else if (showTime >= 6) {
    console.log("Morning Showing!");
} else {
    console.log("No Showings!");
}

alert("Showtime Alert! The showtime is " + showTime + ":00. Please check the schedule for more details.");


