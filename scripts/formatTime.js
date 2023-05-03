function formatTimestamps(date, span) {
    console.log(date);
    const timestamp = new Date(date);
    console.log(timestamp);
    const formattedDate = timestamp.toLocaleString('en-US', { month: 'short', day: 'numeric' });
    span.innerHTML = " " + formattedDate;
    console.log(formattedDate);
}

// Wait for the DOM to be fully loaded before running the function
document.addEventListener('DOMContentLoaded', formatTimestamps);