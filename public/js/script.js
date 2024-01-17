$(function(){

    $('.btn_2').fadeOut(200);
  	$('.btn_3').fadeOut(200);
  	$('.btn_4').fadeOut(200);
  	$('.btn_5').fadeOut(200);
  	$('.btn_6').fadeOut(200); 



	$('.Btn_H1').hover(function() {
		$('.btn_2').fadeOut(100);
		$('.btn_3').fadeOut(100);
		$('.btn_4').fadeOut(100);
		$('.btn_5').fadeOut(100);
		$('.btn_6').fadeOut(100);
		$('.btn_1').fadeIn(400);
		return false;
	});
	$('.Btn_H2').hover(function() {
		$('.btn_1').fadeOut(100);
		$('.btn_3').fadeOut(100);
		$('.btn_4').fadeOut(100);
		$('.btn_5').fadeOut(100);
		$('.btn_6').fadeOut(100);
		$('.btn_2').fadeIn(400);
		return false;
	});
	$('.Btn_H3').hover(function() {
		$('.btn_1').fadeOut(100);
		$('.btn_2').fadeOut(100);
		$('.btn_4').fadeOut(100);
		$('.btn_5').fadeOut(100);
		$('.btn_6').fadeOut(100);
		$('.btn_3').fadeIn(400);
		return false;
	});
	$('.Btn_H4').hover(function() {
		$('.btn_1').fadeOut(100);
		$('.btn_2').fadeOut(100);
		$('.btn_3').fadeOut(100);
		$('.btn_5').fadeOut(100);
		$('.btn_6').fadeOut(100);
		$('.btn_4').fadeIn(400);
		return false;
	});
	$('.Btn_H5').hover(function() {
		$('.btn_1').fadeOut(100);
		$('.btn_2').fadeOut(100);
		$('.btn_3').fadeOut(100);
		$('.btn_4').fadeOut(100);
		$('.btn_6').fadeOut(100);
		$('.btn_5').fadeIn(400);
		return false;
	});
		$('.Btn_H6').hover(function() {
		$('.btn_1').fadeOut(100);
		$('.btn_2').fadeOut(100);
		$('.btn_3').fadeOut(100);
		$('.btn_4').fadeOut(100);
		$('.btn_5').fadeOut(100);
		$('.btn_6').fadeIn(400);
		return false;
	});
		
});