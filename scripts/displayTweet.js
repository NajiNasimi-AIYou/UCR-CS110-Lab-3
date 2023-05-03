function displayNewTweets(data){

    const tweetContainer = document.querySelector('.posts');

    data.forEach(tweet => {
        //Create the post element
        const postDiv = document.createElement('div');
        postDiv.classList.add('post-number', 'post');


        //Image
        const staticImg = document.createElement('img');
        staticImg.src = 'images/ratatouille.jpg';
        staticImg.alt = "Ratatouille's profile picture"
        staticImg.width = 50;
        staticImg.height = 50;
        postDiv.appendChild(staticImg);


        //Create another div
        const userPostDiv = document.createElement('div');
        userPostDiv.classList.add('user-post');

        //Create tweet content
        const userP = document.createElement('p');

        //username
        const strong = document.createElement('strong');
        strong.classList.add('Name');
        strong.setAttribute('user-name', tweet.user_name)
        strong.textContent = tweet.user_name;
        userP.appendChild(strong);

        //Mention
        const mention = document.createElement('mention');
        mention.classList.add('mention');
        //Hashtags are stored in an array
        mention.setAttribute('mention', tweet.source)
        mention.textContent = tweet.source;
        userP.appendChild(mention);


        //Date
        const span = document.createElement('span');
        span.classList.add('spanDate');
        //Add timestamp
        span.dataset.timestamp = `${tweet.date}`
        userP.appendChild(span);
        
        formatTimestamps(tweet.date, span);
        userPostDiv.appendChild(userP);


        //Pre
        const pre = document.createElement('pre');
        pre.classList.add("text");
        pre.setAttribute('text', tweet.text);
        pre.textContent = tweet.text;
        userPostDiv.appendChild(pre);



        //Hashtags
        const hashtags = document.createElement('hashtags');
        hashtags.classList.add('hashtags');
        //Add hashtags to the array
        hashtags.setAttribute('hashtag', `${returnHashTagsInArray(tweet.hashtags).join(" @")}`);
        userPostDiv.appendChild(hashtags);


        postDiv.appendChild(userPostDiv);
        tweetContainer.appendChild(postDiv);

        /*
        div class="post-number post">
            <img src="images/ratatouille.jpg" alt="Ratatouille's profile picture" width="50" height="50">
            <div class="user-post">
                <p><strong> class="Name" user-name="tweet.user_name"</strong> <mention> class="mention" mention="tweet.source"</mention> <span class="spanDate" data-timestamp="tweet.date"></span></p>
                <pre>class="text" text="tweet.text</pre>
                <hashtags> class="hashtags" hashtag="tweet.hashtags"</hashtags>
            </div>
        </div>

        */

    });
}