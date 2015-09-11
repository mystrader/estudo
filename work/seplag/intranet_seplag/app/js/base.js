$(function () {	
	
	$('.subnavbar').find ('li').each (function (i) {
	
		var mod = i % 3;
		
		if (mod === 2) {
			$(this).addClass ('subnavbar-open-right');
		}
		
	});	
	
});





$(document).ready(function(){
    
	var clickEvent = false;
	$('#myCarousel').carousel({
		interval:   4000	
	}).on('click', '.list-group li', function() {
			clickEvent = true;
			$('.list-group li').removeClass('active');
			$(this).addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.list-group').children().length -1;
			var current = $('.list-group li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.list-group li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
})

$(window).load(function() {
    var boxheight = $('#myCarousel .carousel-inner').innerHeight();
    var itemlength = $('#myCarousel .item').length;
    var triggerheight = Math.round(boxheight/itemlength+1);
	$('#myCarousel .list-group-item').outerHeight(triggerheight);
});



/***
* PÁGINAS: Todas
* FUNÇÂO:  fixPlaceholers html5
************************************************************************************************************/
/* <![CDATA[ */
$(function(){var a=document.createElement("input");"placeholder"in a==0&&$("[placeholder]").focus(function(){var a=$(this);a.val()==a.attr("placeholder")&&(a.val("").removeClass("placeholder"),a.hasClass("password")&&(a.removeClass("password"),this.type="password"))}).blur(function(){var a=$(this);(""==a.val()||a.val()==a.attr("placeholder"))&&("password"==this.type&&(a.addClass("password"),this.type="text"),a.addClass("placeholder").val(a.attr("placeholder")))}).blur().parents("form").submit(function(){$(this).find("[placeholder]").each(function(){var a=$(this);a.val()==a.attr("placeholder")&&a.val("")})})});
/* ]]> */


























