function searchTweets() {
    let input = document.getElementById('searchBar').value.toLowerCase();;
    let posts = document.getElementsByClassName('post');

    for (i = 0; i < posts.length; i++) {
        if (!posts[i].innerHTML.toLowerCase().includes(input)) {
            posts[i].style.display = "none";
        }
        else {
            posts[i].style.display = "list-item";
        }
    }
}
// Add an event listener for the 'submit' event on the form
document.getElementById('saerchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and causing a page reload
    searchTweets(); // Call the searchTweets function
});