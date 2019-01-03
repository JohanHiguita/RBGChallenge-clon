var correct;
var puntaje;
//inicializa el juego
game();

//Enlaza el clic de los circulos a la función guess
$('.option').on('click', guess);
$('.close a').on('click', function(){
	$('.result').hide();
	$('.option').removeClass('scale');
	game();
});


function game() {
	$('.score span').text(puntaje);
	correct = Math.floor(Math.random() * 3);
	$('.option').each(function(i) {
		var color = generateColor();
		$(this).css('background-color',color);
		if (i == correct) {
			$('.question').text(color);
		}
	});
}

function guess() {
	$(this).addClass('scale');
	var index = $('.option').index(this);
	if (index == correct) {
		$('.result.won').show();
		puntaje +=1;
	}else{
		$('.result.lost').show();
		puntaje=0;
	}
	
}

function random() {
	return Math.floor(Math.random() * 256);
}

function generateColor(argument) {
	return 'rgb('+random()+', '+random()+', '+random()+')';
}