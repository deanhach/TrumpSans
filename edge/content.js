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
		var tweets = document.getElementsByClassName('twitter-tweet');
		for (i = 0; i < tweets.length; ++i) {
			var twitterHandle = tweets[i].contentDocument.querySelector('.TweetAuthor-screenName');

			if (twitterHandle && twitterHandle.textContent=== '@realDonaldTrump') {
				var tweet = tweets[i].contentDocument.querySelector('.Tweet-text');

				if (tweet) {
					tweet.style.fontFamily = "Comic Sans MS, Comic Sans";
				}
			}
		}
	}
}

var timer;

new MutationObserver(function(mutations) {
	clearTimeout(timer);
	timer = setTimeout(sansify, 1000);
}).observe(document.body, { childList: true, subtree: true });
