var gamePattern = [];

var userClickPattern = [];

var buttonColors = ['red', 'blue', 'green', 'yellow'];

var level = 0;

var enable = false;

var started = false;

function nextSequence() {
	userClickPattern = [];

	level = level + 1;

	let variableNumber = Math.floor(Math.random() * 4);

	var randomChosenColour = buttonColors[variableNumber];

	gamePattern.push(randomChosenColour);

	$('#' + randomChosenColour)
		.fadeIn(100)
		.fadeOut(100)
		.fadeIn(100);

	playSound(randomChosenColour);

	$('#level-title').text('Level ' + level);
}

$('.btn').click(function () {
	if (enable) {
		var userChosenColor = $(this).attr('id');
		userClickPattern.push(userChosenColor);
		playSound(userChosenColor);
		animatePress(userChosenColor);

		checkAnswer(userClickPattern.length - 1);
	}
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

$(document).keypress(function () {
	if (!started) {
		$('#level-title').text('Level ' + level);

		enable = true;

		nextSequence();

		started = true;
	}
});

function checkAnswer(currentLevel) {
	if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
		console.log('Success');
	} else {
		var game_over = new Audio('sounds/wrong.mp3');
		game_over.play();

		$('body').addClass('game-over');
		$('h1').text('Game Over, Press Any Key to Restart');
		setTimeout(() => {
			$('body').removeClass('game-over');
		}, 200);

		startOver();
	}
	if (userClickPattern.length === gamePattern.length) {
		setTimeout(() => {
			nextSequence();
		}, 1000);
	}
}

function startOver() {
	level = 0;
	gamePattern = [];
	started = false;
}
