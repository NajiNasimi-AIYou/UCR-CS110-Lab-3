//We want to fetch X amount of tweets

//Once we fetch, remove duplicates, and then from there we want to display the tweets, sort tweets, so they are all displayed in order.


const url = "http://50.21.190.71/get_tweets"
const tweets = new Set();

function fetchTweets() {
    fetch(url)
        .then(res => res.json()) .then(data => {
        // do something with data
        let uniqueData = removeDuplicates(data);
        displayNewTweets(uniqueData);
    })
        .catch(err => {
            // error catching
            console.log(err)
        })
}


function printTweets(tweetJson) {
    console.log(tweetJson);
}

function returnHashTagsInArray(tweetHashtags) {
    let hashtags = [];
    if(tweetHashtags) {
        hashtags = JSON.parse(tweetHashtags.replace(/'/g, '"'));
    }
    return hashtags;
}
function tweetKey(tweet) {
    const hashtagKey = `${returnHashTagsInArray(tweet.hashtags).join('-')}`;
    return `${tweet.text}!${hashtagKey}`;
}


function removeDuplicates(data) {
    //Remove based on if we seen via text
    //Combine the hashtags and tweet text to create a tweetKey(key) and just check against that
    return data.filter(tweet => {
        const key = tweetKey(tweet);
        if (tweets.has(key)) {
            return false;
        } else {
            tweets.add(key);
            return true;
        }
    });
}

let TIMER_LENGTH = 5;
function startFetchTimer() {
    let start = Date.now();
    let diff;

    userTime = setInterval(function() {
        diff = TIMER_LENGTH - (((Date.now() - start) / 1000) | 0);
        console.log(diff);
        if (diff === 0) {
            // Add any code to execute when timer reaches 0 here
            fetchTweets();
            sortTweets();
            restartTimer();
        }
    }, 1000);
}

function restartTimer() {
    clearInterval(userTime);
    startFetchTimer();
}

function permaStopTimer() {
    clearInterval(userTime);
}

fetchTweets();
startFetchTimer();