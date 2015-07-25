var segpaSong = false;
var player;

$("#gallery").nanoGallery({
	userID: '134637764@N06',
	kind: 'flickr',
	photoset: 'none',
	thumbnailHeight: 120,
	thumbnailWidth: 120,
	theme: 'light',
	thumbnailLabel: {
		display: false
	},
	thumbnailLazyLoad: true
});

var catchphrases = [
	'Wesh nike ta mer',
	'Tas cru que jété un fruit ?',
	'Ta taite de kinder surprise sponsaurisé par PES 2004',
	'Oktamer Batayé',
	'Salu bende de fisse de vaux maires',
	'Wesh fasse de ra',
	'Oui moa ossi je t\'ème bi1'
];
var catchphrase = catchphrases[Math.floor(Math.random() * catchphrases.length)];

$('#catchphrase').text(catchphrase);
document.title = document.title + ' - ' + catchphrase;

twitterFetcher.fetch({
	'id': '616769161897877504',
	'domId': 'twitter',
	'maxTweets': 1,
	'enableLinks': true,
	'showImages': false,
	'customCallback': showLatestTweet
});

function showLatestTweet(tweets) {
	var wrapper = document.createElement('div');
	wrapper.innerHTML = tweets[0];
	$('img', wrapper).each(function() {
		$(this).replaceWith($(this).attr('alt'));
	});
	document.getElementById('last-tweet').innerHTML = '<p>' + wrapper.childNodes[1].innerHTML + '</p><a href="https://twitter.com/white_mamadou" target="_blank" style="float: right;">@white_mamadou</a>';
}

$('.thumbnail').click(function() {
	if(segpaSong) {
		$('body').css('padding', '');
		if(typeof player !== 'undefined') {
			player.pauseVideo();
			player.seekTo(0, true);
		}
	}
	else {
		$('body').css('padding', '0em');
		if(typeof player !== 'undefined') {
			player.playVideo();
		}
	}
	$('#vcard').toggleClass('hidden');
	$('#segpa-song').toggleClass('hidden');
	segpaSong = !segpaSong;
});

function onYouTubePlayerAPIReady() {
	new YT.Player('player', {
		videoId: 'ugMS6DdDw1A',
		loop: true,
		events: {
			onReady: function(event) {
				player = event.target;
			}
		}
	});
}