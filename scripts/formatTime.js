function formatTimestamps() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    let userPosts = document.getElementsByClassName('user-post');

    for (let i = 0; i < userPosts.length; i++) {
        let timestamp = new Date(userPosts[i].getAttribute('data-timestamp'));
        let month = monthNames[timestamp.getMonth()];
        let day = timestamp.getDate();
        let formattedDate = `${month} ${day}`;
        
        userPosts[i].querySelector('span').textContent = formattedDate;
    }
}

// Call the formatTimestamps function to format and display the timestamps on page load
formatTimestamps();
