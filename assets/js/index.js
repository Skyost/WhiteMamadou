var catchphrases = [
	'Wesh nike ta mer',
	'Tas cru que jété un fruit ?',
	'Ta taite de kinder surprise sponsaurisé par PES 2004'
];
var catchphrase = catchphrases[Math.floor(Math.random() * catchphrases.length)];

$('#catchphrase').text(catchphrase);
document.title = document.title + ' - ' + catchphrase;

twitterFetcher.fetch({
	'id': '616769161897877504',
	'domId': 'twitter',
	'maxTweets': 1,
	'enableLinks': true,
	'customCallback': showLatestTweet
});

function showLatestTweet(tweets) {
	var wrapper = document.createElement('div');
	wrapper.innerHTML = tweets[0];
	document.getElementById('last-tweet').innerHTML = '<p>' + wrapper.childNodes[1].innerHTML + '</p><a href="https://twitter.com/white_mamadou" target="_blank" style="float: right;">@white_mamadou</a>';
	centerVCard();
}

$(window).resize(function() {
	centerVCard();
});

function centerVCard() {
	var vCard = $('#vcard');
	vCard.css('margin-top', ($(document).height() / 2) - (vCard.height() / 2));
}

centerVCard();

$("#gallery").nanoGallery({
	userID: '134637764@N06',
	kind: 'flickr',
	photoset: 'none',
	thumbnailHeight: 120,
	thumbnailWidth: 120,
	theme: 'default',
	thumbnailLabel: {
		display: false
	},
	thumbnailLazyLoad: true
});