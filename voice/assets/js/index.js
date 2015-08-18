"use strict"

function getSoundUrl(text, voice) {
	var proxyUl = 'http://voxygen.fr/sites/all/modules/voxygen_voices/assets/proxy/index.php';
	var soundUrl = proxyUl + '?' + 
	'method=redirect' +
    '&text=' + encodeURIComponent(text) +
    '&voice=' + voice +
    '&ts=' + (new Date()).getTime();
	return soundUrl;
}

function getAudio(text, voice) {
	var audio = document.createElement('audio');
	audio.src = getSoundUrl(text, voice);
	audio.preload = 'auto';
	return audio;
}

function download(text, voice)  {
	var link = document.createElement('a');
	link.download = 'Voix';
	link.href = getSoundUrl(text, voice);
	link.click();
}

function playDialog(dialog, buttons) {
	if(dialog.length == 0) {
		alert('Impossible de jouer cette voix !');
		return;
	}
	dialog.play();
	dialog.onended = function() {
		for(var i = 0; i != buttons.length; i++) {
			$(buttons[i]).removeClass('disabled');
		}
	};
	dialog.onerror = function() {
		alert('Impossible de jouer cette voix !');
		for(var i = 0; i != buttons.length; i++) {
			$(buttons[i]).removeClass('disabled');
		}
	};
}

$(document).ready(function() {
	var playBtn = $('#play');
	var downloadBtn = $('#download');
	playBtn.click(function() {
		if(playBtn.hasClass('disabled')) {
			return;
		}
		playBtn.addClass('disabled');
		downloadBtn.addClass('disabled');
		playDialog(getAudio($('.text').val(), $('#voices').find(':selected').text()), [playBtn, downloadBtn]);
	});
	downloadBtn.click(function() {
		if(downloadBtn.hasClass('disabled')) {
			return;
		}
		playBtn.addClass('disabled');
		downloadBtn.addClass('disabled');
		download($('.text').val(), $('#voices').find(':selected').text());
		playBtn.removeClass('disabled');
		downloadBtn.removeClass('disabled');
	});
});