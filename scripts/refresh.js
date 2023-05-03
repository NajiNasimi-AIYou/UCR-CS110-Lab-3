function refreshTweets(tweets) {
    tweetStatus = tweets.statuses;

    // Remove previous tweets
    while (tweetContainer.firstChild){
        tweetContainer[0].removeChild(tweetContainer[0].firstChild);
    }

    // Create div to hold new data
    const tweetList = document.createElement("div");
    tweetContainer[0].appendChild(tweetList);

    // For each tweet we get, put it in a larger div tag
    tweetStatus.forEach((tweet) => {
        // Do not display duplicates
        if(!id.includes(tweet.id_str)){
            id.push(tweet.id_str);

            // Create overall div for tweet
            var tweetElement = document.createElement("div");
            tweetElement.className = 'tweets';
            var tweetPicdiv = document.createElement("div");

            /* 
                Create image tag and assign it a URL, if it's a bad URL
                Default to Remy's profile picture if we have a bad image
            */
            const tweetPic = document.createElement("img");
            tweetPic.src = tweet.user.profile_image_url;
            if(!URLError(tweet.user.profile_image_url)){
                tweetPic.src = 'images/ratatouille.jpg';
            }
            
            // Add tweet to div and assign the class properties
            tweetPic.className = "tweetPic";
            tweetPicdiv.append(tweetPic);
            tweetPicdiv.className = "tweetPicContainer";
            tweetElement.append(tweetPicdiv);

            // Add username in a span
            var tweetContent = document.createElement('div');
            var name = document.createElement('span');
            name.appendChild(document.createTextNode(tweet.user.name));
            name.className = 'user-name tweetName';
            tweetContent.className = 'tweetContentContainer';
            tweetContent.append(name);

            // Concatenate date and username together in a span
            var tweetHandle = document.createElement('span');
            tweetHandle.appendChild(document.createTextNode(' @' + tweet.user.screen_name + ' ' + tweet.user.created_at.slice(4,10)));
            tweetHandle.className = 'tweetHandle';
            tweetContent.className = 'tweetContentContainer';
            tweetContent.append(tweetHandle);

            // Throw text into a p tag and then add all elements to tweetContent
            var textp = document.createElement('p');
            textp.appendChild(document.createTextNode(tweet.text));
            textp.className = 'tweetText';
            tweetElement.append(textp);
            tweetContent.append(textp);
            tweetElement.append(tweetContent);

            // Add data to global array
            tweetElement.className = 'tweets flexTweet';
            tweetArr.push(tweetElement);
        }
        //console.log(tweetArr.length);
    });

    // Sort given tweets based on order received, oldest tweet at the bottom
    for(var i = tweetArr.length-1; i >= 0; i--){
        tweetList.appendChild(tweetArr[i]);
        //console.log(tweetArr[i]);
    }