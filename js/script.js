$(document).ready(function(){
	$('.lista-modelos').hide();
	$('.lista-modelos').first().show();
	$('.marca').click(function(){
		var index = $(this).index('.marca');
		$('.marca').removeClass('selec');
		$(this).addClass('selec');
		$('.lista-modelos').hide();
		$('.lista-modelos').eq(index).show();
	});
	$('.modelo').click(function(){
		modelo = $(this).html().toLowerCase();
		$('#show-car').attr('src', 'img/' + modelo + '.png');
		//$('.roda:first').click();
		var dados = getDistance(modelo);
		renewRodas(dados[3]);
	});
	$('.roda').click(function(){
		var src = $(this).attr('src');
		creaRoda(src);
	});
	modelo = 'agile';
	$('.roda:first').click();
});

function creaRoda(src){
	$('.roda-show').attr('src', src);
	var distancias = getDistance(modelo);
	$('.roda-show').first().css('left', distancias[0] + 'px');
	$('.roda-show').last().css('left', distancias[1] + 'px');
	resizeRodas(distancias[2]);
}

function renewRodas(aro){
	$('.roda').hide();
	$(.'ARO' + aro).show();
}

function getDistance(modelo){
	var modelos = {
		agile : [287, 657, 70, 17],
		corsa : [275, 627, 70, 20],
		astra : [274, 672, 77, 20],
		vectra: [269, 645, 70, 20],
		palio : [308, 640, 66, 20],
		uno : [313, 639, 70, 22]
	};
	if(typeof modelos[modelo] == 'undefined')
		return modelos['agile'];
	return modelos[modelo];
}
function resizeRodas(px){
	$('.roda-show').css('width', px + 'px');
	$('.roda-show').css('height', px + 'px');
}