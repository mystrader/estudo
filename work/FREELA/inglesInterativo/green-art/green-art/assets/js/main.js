/* ==========================================================================
   Variáveis
   ========================================================================== */
	// telas
	var tempEixo;
	var tempUnidade;
	var tempLicao;
	var tempTela;

	// audio
	var audioType;
	var tempAudioClass;
	var currAudio;
	var audioTeste;
	var audioTocando = false;

	// Alinhamento dos elementos principais e telas
	var alturaTotalConteudo;
	var margemTop;
	var tempTelaUrl;
	var loadingLeft;
	var loadingTop;

	// Principais interações nas telas
	var $this;
	var $that;

	var clique = 0;
	var totalCliques = 0;
	var atividadeFinalizada = false;

/* ==========================================================================
   Funções
   ========================================================================== */
   
	function ajustaAlturaContainer() {
		//console.log("# ajustaAlturaContainer:");
		//console.log("|--- container height: " + $(".container").height() );
		//console.log("|--- window height: " + $(window).height() );
		//console.log("|--- window .prop('scrollHeight'): " + $(body)[0].scrollHeight );
		$(".container").height( $(window).height() );
	}
	function centralizaConteudo() {
		//console.log("# centralizaConteudo:");
		//console.log("|--- alturaTotalConteudo: " + alturaTotalConteudo);
		//console.log("|--- Window height: " + $(window).height());
		if( $(".footer-content").length ){
			alturaTotalConteudo = $("#borda-main-content").height() + $(".footer-content").height();
		} else {
			alturaTotalConteudo = $("#borda-main-content").height();
		}
		
		if ( $(window).height() > alturaTotalConteudo ) {
			margemTop = ($(window).height() - alturaTotalConteudo) / 2;
			//console.log("margemTop: " + margemTop);
			$("#main-content, #borda-main-content").css({"top":margemTop});
		} else {
			$("#main-content, #borda-main-content").css({"top":"0"});
		}
		
		loadingLeft = $(window).width() / 2;
		loadingLeft = loadingLeft - $("#loading span").width() / 2;
		
		loadingTop = $(window).height() / 2;
		loadingTop = loadingTop - $("#loading span").height() / 2;
		
	
		if ( $(window).height() > 735 ) {
			//console.log("loadingTop: " + loadingTop);
			$("#loading span").css({top: loadingTop});
		}
		if ( $(window).width() > 1225 ) {
			//console.log("loadingLeft: " + loadingLeft);
			$("#loading span").css({left: loadingLeft});
		}
	}
	
	function finalizaAtividade() {
		console.log("# finalizaAtividade");
		console.log("|--- A atividade chegou ao fim!");
		$("#main-content").prepend("<div id=\"fim\"></div>");
		$("#fim").animate({"opacity":"1", "top":"584px", "left":"1012px"}, 1200);
		atividadeFinalizada = true;
	}
	
	function preparaAudio(array){
		console.log("# preparaAudio:");
			
		var audioTeste = document.createElement("audio");
		if (audioTeste.canPlayType) {
			var canPlayMp3 = !!audioTeste.canPlayType && "" != audioTeste.canPlayType('audio/mpeg');
			//console.log("|--  canPlayMp3: " + canPlayMp3);
			
			var canPlayOgg = !!audioTeste.canPlayType && "" != audioTeste.canPlayType('audio/ogg; codecs="vorbis"');
			//console.log("|--  canPlayOgg: " + canPlayOgg);
			
			if(canPlayMp3) {
				//console.log("|---  canPlayMp3: " + canPlayMp3);
				audioType = "mp3";
			} else if(canPlayOgg) {
				//console.log("|---  canPlayOgg: " + canPlayOgg);
				audioType = "ogg";
			}
		} else {
			audioType = "none";
			if( $(".outdated-browser.upgrade-msg").is(":visible") ) {
				$(".outdated-browser.upgrade-msg").hide();
			}
			$(".outdated-browser.audio-msg").show();
		}
		//console.log("|---  audioType: " + audioType);
			
		if( audioType != "none" ) {
			$.each(array, function(index, value) {
				/*console.log("|--- " + index +":");
				console.log("|--  value['btn']" + value['btn']);
				console.log("|--  value['url']" + value['url']);*/
	
				tempAudioClass = tempEixo +"-U"+ tempUnidade +"-L"+ tempLicao +"-T"+ tempTela +"-"+ value['btn'].substring(1);
				var audioIndex;
				
				if( $("#" + tempAudioClass).length == 0 ) {
					audioIndex = $(
					"<audio id=\""+ tempAudioClass + "\" preload=\"auto\">" +
						"<source src=\"../../../../"+ tempEixo +"/assets/audio/U"+ tempUnidade +"/L"+ tempLicao +"/T"+ tempTela +"/"+ value['url'] +"."+ audioType +"\" type=\"audio/"+ audioType +"\">" +
					"</audio>");
					audioIndex.appendTo("body");
					
					$.get();
				} else {
					audioIndex = $("#" + tempAudioClass);
					//console.log("|--- audioIndex carregado: " + audioIndex.attr("id"));
				}
				
				if( typeof value['btn'] !== 'undefined' ){
					$(value['btn']).click(function(event) {
						event.preventDefault();
						
						if(audioTocando != true) {
							console.log("# Audio:");
							console.log("|--- Deu play no audio: " + value['btn']);
							
							currAudio = audioIndex[0];
							currAudio.play();
							audioTocando = true;
							currAudio.addEventListener("ended", function() {
								audioTocando = false;
							});
							currAudio.addEventListener("pause", function() {
								audioTocando = false;
							});
						} else {
							// continua tocando o audio
						}
					});
				}
			});
		}		
	}

/* ==========================================================================
   jQuery
   ========================================================================== */

	$(window).resize(function() {
		ajustaAlturaContainer();
		centralizaConteudo();
	});
	
	$(document).ready(function() {
		// $("body").attr("oncontextmenu", "return false");
		ajustaAlturaContainer();
		centralizaConteudo();
		
		$("a[href='#']").on("click", function(event) {
			event.preventDefault();
		});
	});
	
	$(window).load(function() {
		$("#borda-main-content, #main-content").fadeIn();
		$("#loading").fadeOut();
	});