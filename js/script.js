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
		modelo = $(this).html().toLowerCase().replace(" ", "_");
		$('#show-car').attr('src', 'img/carregando.jpg');
		setTimeout(function(){$('#show-car').attr('src', 'img/' + modelo + '.png')},500);
		renewRodas(getDistance(modelo, 3));
		$('.visible:first').click();
	});
	$('.roda').click(function(){
		var src = $(this).attr('src');
		creaRoda(src);
		$('#roda-atual').html('<b>Modelo da Roda:</b>' + getRodaNome($(this).index('.roda')));
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
		s10 : [263, 637, 71, 18],
		vectra: [269, 645, 70, 17],
		cruze : [289, 645, 70, 17],
		//fiat
		linea : [273, 638, 70, 17],
		punto : [303, 661, 68, 17],
		bravo : [317, 646, 60, 17],
		palio : [308, 640, 66, 17],
		uno : [313, 639, 70, 17],
		siena : [266, 629, 70, 17],
		stilo : [271, 670, 75, 17],
		strada : [313, 639, 60, 17],
		freemont : [312, 626, 64, 19],
		//toyota
		corolla : [314, 619, 62, 18],
		hilux : [311, 608, 55, 20],
		//hyundai
		santa_fe : [311, 608, 60, 18],
		ix35 : [311, 608, 60, 18],
		accent : [307, 623, 56, 17],
		veloster : [310, 623, 60, 18],
		//bmw
		320 : [292, 634, 70, 17],
		m3 : [292, 638, 70, 19],
		z4 : [310, 627, 68, 17],
		x1 : [294, 628, 65, 17],
		x3 : [301, 617, 64, 18],
		x5 : [296, 618, 61, 20],
		x6 : [301, 619, 64, 20],
		//mercedes
		serie_a : [309, 652, 66, 18],
		serie_c : [295, 609, 65, 18],
		serie_e : [288, 602, 65, 18],
		serie_s : [293, 615, 56, 18],
		//kia
		sorento : [310, 620, 67, 18],
		sportage : [306, 630, 67, 18],
		cadenza : [308, 610, 60, 18],
		cerato : [308, 623, 60, 18],
		//mitsubishi
		eclipse : [318, 623, 60, 18],
		lancer : [310, 623, 60, 18],
		triton : [294, 603, 56, 18],
		//ford
		edge : [261, 654, 83, 18],
		ecosport : [303, 625, 56, 17],
		ranger : [298, 621, 58, 18],
		fusion : [259, 645, 74, 17],
		focus : [314, 638, 66, 18],
		//honda
		civic : [264, 659, 72, 17],
		city : [310, 623, 61, 17],
		'hr-v' : [315, 636, 64, 19],
		//audi
		a1 : [290, 648, 69, 17],
		a4 : [299, 620, 60, 18],
		a7 : [299, 617, 60, 18],
		q3 : [308, 621, 78, 19],
		q5 : [302, 628, 68, 20],
		q7 : [301, 620, 61, 20],
		//nissan
		sentra : [308, 617, 56, 17],
		livina : [313, 626, 60, 17],
		versa : [308, 623, 55, 17],
		'370z' : [305, 624, 72, 19],
		//renault
		sandero : [306, 646, 67, 18],
		logan : [301, 629, 62, 17],
		duster : [304, 636, 64, 17],
		clio : [314, 658, 58, 17],
		//volkswagen
		gol : [313, 651, 60, 17],
		golf : [274, 667, 77, 17],
		passat : [301, 617, 55, 17],
		bora : [273, 640, 69, 17],
		fox : [323, 662, 69, 17],
		saveiro : [299, 628, 54, 17],
		voyage : [312, 619, 54, 17],
		amarok : [295, 599, 54, 19]

	};
	if(typeof modelos[modelo] == 'undefined')
		return modelos['onix'];
	if(typeof index !== 'undefined')
		return modelos[modelo][index];
	return modelos[modelo];
}
function getRodaNome(index){
	var nomesRodas = [
		'PDW Roti Prata Diamantado',
		'PDW Mercedes Benz AMG Grafite Diamantado',
		'PDW Mercedes Benz C63 Grafite Diamantado',
		'PDW Citroen DS5 Prata Diamantado',
		'PDW BMW M4 Grafite Diamantado',
		'PDW Eclipse Preto Diamantado',
		'PDW Range Rover AUTOBIOGRAPHIC Grafite Diamantado',
		'PDW BB Grafite Diamantado',
		'PDW C-SPEC U4B Preto',
		'PDW Eclipse Grafite Fosco',
		'PDW Eclipse Bronze Fosco',
		'PDW Hilux 2015 HS Super Prata',
		'PDW Pajero 2015 HS Super Prata',
		'PDW RJR Prata Diamantado',
		'PDW RJR Grafite Fosco',
		'PDW Chevrolet Blazer Grafite Diamantado'
	]
	return nomesRodas[index];
}
function resizeRodas(px){
	$('.roda-show').css({
		'width' : 'auto',
		'height' : px + 'px'
	});
}