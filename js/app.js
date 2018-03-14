var color = localStorage.getItem("couleur");
var cookies = localStorage.getItem("cookies");

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
var id;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

$(function() {
    $('.navbar').css('background-color', color);
    if (cookies == 1) {
        $('.cookies').hide();
    }
});

$('.compris').click(function() {
    $('.cookies').hide();
    localStorage.setItem("cookies", 1);
});

$('.titreNav').click(function() {
    var selection = $('.selection').hide();
    $('.pisteRadio').css('background-color', '#66666FFF');
    $('.selection').toggle();
    $('#player').hide();
});

$('.pisteRadio').click(function() {
    var toggle = $('#player').hide();
    $('.pisteRadio').css('background-color', '#66666FFF').removeClass('bounceIn');
    $(this).css('background-color', '#FF7F7FF3').addClass('bounceIn');
    $('.selection').hide();
    if (toggle == toggle) {
        $('#player').toggle();
    }
});

$('.electro').click(function() {
	$('#player').attr('src', 'https://www.youtube.com/embed/t9tmpCw277c');
});

$('.chill').click(function() {
	$('#player').attr('src', 'https://www.youtube.com/embed/e9dW22ZtSjc');
});

$('.dubstep').click(function() {
	$('#player').attr('src', 'https://www.youtube.com/embed/4rdaGSlLyDE');
});

$('.jazz').click(function() {
	$('#player').attr('src', 'https://www.youtube.com/embed/2ccaHpy5Ewo');
});

$('.buttonSettings').click(function() {
    $('.filtreSettings').toggle();
});

$('.color').click(function() {
    $('.color').css('border', 'none');
    $(this).css('border', 'solid 3px blue');
    color = $(this).css('background-color');
});

$('.confirmer').click(function() {
    $('.filtreSettings').hide();
    $('.navbar').css('background-color', color);
    localStorage.setItem("couleur", color);
});