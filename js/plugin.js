var dice1, dice2, dices = 0, activePlayer = 0, score = [0,0], playing = true;

var imgDice1 = document.getElementById('dice1'),
	imgDice2 = document.getElementById('dice2'),
	roll = document.getElementById('roll'),
	hold = document.getElementById('hold'),
	newGame = document.getElementById('new'),
	finalScore = document.getElementById('finalScore'),
	player0 = document.querySelector('.player0'),
	player1 = document.querySelector('.player1');

imgDice1.style.display = 'none';
imgDice2.style.display = 'none';


roll.onclick = function() {
	if (playing === true) {
		if (finalScore.value !== '' && !isNaN(finalScore.value) && finalScore.value !== "0") {
			finalScore.readOnly = true;

			imgDice1.style.display = 'block';
			imgDice2.style.display = 'block';

			dice1 = Math.floor((Math.random() * 6) + 1);
			dice2 = Math.floor((Math.random() * 6) + 1);

			imgDice1.setAttribute('src', 'images/dice-' + dice1 + '.png');
			imgDice2.setAttribute('src', 'images/dice-' + dice2 + '.png');

			dices += dice1 + dice2;
			document.getElementById('current' + activePlayer).textContent = dices;

			imgDice1.style.opacity = 1;
			imgDice2.style.opacity = 1;

			if (dice1 === 1 || dice2 === 1) {
				nextPlayer();	
			} else if (dice1 === 6 && dice2 === 6) {
				score[activePlayer] = 0;
				document.getElementById('score' + activePlayer).textContent = 0;
				nextPlayer();
			}
		}
	}
};

hold.onclick = function() {
	if (playing === true) {
		score[activePlayer] += dices;
		document.getElementById('score' + activePlayer).textContent = score[activePlayer];

		if (score[activePlayer] >= finalScore.value) {
			document.getElementById('player' + activePlayer).textContent = 'Winner';
			document.getElementById('player' + activePlayer).style.color = '#EB4D4D';

			playing = false;

			imgDice1.style.display = 'none';
			imgDice2.style.display = 'none';

		} else {
			nextPlayer();
		}
	}
};

newGame.onclick = function() {
	imgDice1.style.display = 'none';
	imgDice2.style.display = 'none';

	document.getElementById('score0').textContent = 0;
	document.getElementById('score1').textContent = 0;
	document.getElementById('current0').textContent = 0;
	document.getElementById('current1').textContent = 0;
	document.getElementById('player0').textContent = 'Player 1';
	document.getElementById('player1').textContent = 'Player 2';

	document.getElementById('player0').style.color = '#444';
	document.getElementById('player1').style.color = '#444';

	player0.classList.add('active');
	player1.classList.remove('active');
	finalScore.value = '';
	finalScore.readOnly = false;
	activePlayer = 0;
	dices = 0;
	score = [0,0];
	playing = true;
};

function nextPlayer() {
	document.getElementById('current' + activePlayer).textContent = 0;
	dices = 0;

	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	player0.classList.toggle('active');
	player1.classList.toggle('active');
	imgDice1.style.opacity = 0.5;
	imgDice2.style.opacity = 0.5;
};




