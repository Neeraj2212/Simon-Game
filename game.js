var gamePattern = [];

var userClickPattern = [];

var buttonColors = ['red', 'blue', 'green', 'yellow'];

function nextSequence() {
	let variableNumber = Math.floor(Math.random() * 4);

	var randomChosenColour = buttonColors[variableNumber];

	gamePattern.push(randomChosenColour);

	$('#' + randomChosenColour)
		.fadeIn(100)
		.fadeOut(100)
		.fadeIn(100);

	playSound(randomChosenColour);
}

$('.btn').click(function () {
	var userChosenColor = $(this).attr('id');
	userClickPattern.push(userChosenColor);
	playSound(userChosenColor);
	animatePress(userChosenColor);
});

function playSound(soundName) {
	var audio = new Audio('sounds/' + soundName + '.mp3');
	audio.play();
}

function animatePress(currentColor) {
	$('#' + currentColor).addClass('pressed');

	setTimeout(() => {
		$('#' + currentColor).removeClass('pressed');
	}, 100);
}
