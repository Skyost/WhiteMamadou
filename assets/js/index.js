var catchphrases = [
	'Wesh nike ta mer',
	'Tas cru que jété un fruit ?',
	'Ta taite de kinder surpris sponsaurisé par PES 2004'
];
var catchphrase = catchphrases[Math.floor(Math.random() * catchphrases.length)];

$('#catchphrase').text(catchphrase);
document.title = document.title + ' - ' + catchphrase;

twitterFetcher.fetch({
	'id': '616769161897877504',
	'domId': 'twitter',
	'maxTweets': 1,
	'enableLinks': true,
	'customCallback': handleTweets
});

$(window).resize(function() {
	centerVCard();
});

function handleTweets(tweets) {
	var wrapper = document.createElement('div');
	wrapper.innerHTML = tweets[0];
	document.getElementById('last-tweet').innerHTML = wrapper.childNodes[1].innerHTML;
	centerVCard();
}

function centerVCard() {
	var vCard = $('#vcard');
	vCard.css('margin-top', ($(document).height() / 2) - (vCard.height() / 2));
}

centerVCard();