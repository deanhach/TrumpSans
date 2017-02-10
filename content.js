function sansify() {

if (window.location.origin === "https://twitter.com") {

		var tweets = document.querySelectorAll('.tweet')

		for (i = 0; i < tweets.length; ++i) {
			var twitterHandle = tweets[i].getAttribute('data-screen-name');

			if (twitterHandle && twitterHandle === 'realDonaldTrump') {
				var tweet = tweets[i].querySelector('.tweet-text');

				if (tweet) {
					tweet.style.fontFamily = "Comic Sans MS, Comic Sans";
				}
			}
		}

	}
  else
    {

		var tweets = document.querySelectorAll('twitterwidget')
		for (i = 0; i < tweets.length; ++i) {
			var twitterHandle = tweets[i].shadowRoot.querySelector('.TweetAuthor-screenName');

			if (twitterHandle && twitterHandle.textContent=== '@realDonaldTrump') {
				var tweet = tweets[i].shadowRoot.querySelector('.Tweet-text');

				if (tweet) {
					tweet.style.fontFamily = "Comic Sans MS, Comic Sans";
				}
			}
		}
    }
}

// Reformat tweets after 1, 3, 5, and 10 seconds. Then just give up.
window.setTimeout(sansify, 1000);
window.setTimeout(sansify, 3000);
window.setTimeout(sansify, 5000);
window.setTimeout(sansify, 10000);
