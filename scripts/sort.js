function sortTweets() {
    let container = document.querySelector('.posts');
    let posts = Array.from(document.getElementsByClassName('post'));

    posts.sort((a, b) => {
        return new Date(b.getAttribute('data-timestamp')) - new Date(a.getAttribute('data-timestamp'));
    });

    container.innerHTML = '';
    posts.forEach(post => {
        container.appendChild(post);
    });
}

// Call the sortTweets function to sort the tweets on page load
sortTweets();
