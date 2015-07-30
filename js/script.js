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
		renewRodas(getDistance(modelo, 3));
		$('.visible:first').click();
	});
	$('.roda').click(function(){
		var src = $(this).attr('src');
		creaRoda(src);
	});
	modelo = $('.modelo:first').html().toLowerCase();
	renewRodas(getDistance(modelo)[3]);
	$('.visible:first').click();
});

function creaRoda(src){
	$('.roda-show').attr('src', src);
	var distancias = getDistance(modelo);
	$('.roda-show:first').css('left', distancias[0] + 'px');
	$('.roda-show:last').css('left', distancias[1] + 'px');
	resizeRodas(distancias[2]);
}

function renewRodas(aro){
	$('.roda').removeClass('visible');
	$('.ARO' + aro).addClass('visible');
}

function getDistance(modelo, index){
	var modelos = {
		//chevrolet
		onix : [288, 662, 72, 17],
		corsa : [277, 630, 70, 17],
		s10 : [263, 637, 71, 17],
		vectra: [269, 645, 70, 17],
		cruze : [289, 645, 70, 17],
		//fiat
		linea : [273, 638, 70, 17],
		punto : [303, 661, 68, 17],
		palio : [308, 640, 66, 20],
		uno : [313, 639, 70, 22]
	};
	if(typeof modelos[modelo] == 'undefined')
		return modelos['agile'];
	if(typeof index !== 'undefined')
		return modelos[modelo][index];
	return modelos[modelo];
}
function resizeRodas(px){
	$('.roda-show').css({
		'width' : 'auto',
		'height' : px + 'px'
	});
}