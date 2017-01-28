    var windowH;
    var headerH;
    var footerH;
//ACTIONBAR =================

function actionBarResize(){
    
    var barHeaderH = $('.actionbar > .actionbar-header > .actionbar-toggle').outerHeight();
    
    $('#actionbar').css('min-height', windowH - headerH - footerH - barHeaderH);
    
}

function viewBarResize(){
    
    $('.viewbar').css('min-height', windowH - headerH - footerH);
    
}


//GRID =================

// Funções globais para construção e adaptação do panel-grid
var maxHeight = 0; // the height of the highest element (after the function runs)
var highestElem;  // the highest element (after the function runs)

function panelGridResize(){

    $(".panel-col .panel-body").removeAttr('style');

    if ($(window).outerWidth() > 974) {

        $(".panel-grid").each(function () {

            maxHeight=0; // the height of the highest element (after the function runs)
            $(this).find(".panel-col .panel-body").each(function () {
                $this = $(this);
                if ( $this.outerHeight() > maxHeight ) {
                    highestElem = this;
                    maxHeight = $this.outerHeight();
                }
            });

            $(this).find(".panel-col .panel-body").css('height', maxHeight);

        });

    };

}

function sortSelect(targetField){
    
    // get array of elements
var sentItem = $("." + targetField + " option");

sentItem.sort(function (a, b) {
    
    a = $(a).attr("value");
    b = $(b).attr("value");
    
    // compare
    if(a > b) {
        return 1;
    } else if(a < b) {
        return -1;
    } else {
        return 0;
    }
    
});

// Renderiza os elementos
$("." + targetField).html(sentItem);
    
}

// função para os relationship boxes 

function enablingToggleBtn(relationship){

    var libraryItem = "select.library[data-relation=" + relationship + "] option";
    var chosenItem = "select.selected[data-relation=" + relationship + "] option";

    if ( $(libraryItem + ':selected').length == 0 ) {
        $('[data-relation=' + relationship + '][data-action=select]').addClass('disabled');
        
    } else if ($(libraryItem + ':selected').length >= 1) {
        $('[data-relation=' + relationship + '][data-action=select]').removeClass('disabled');
    }
    
    if ( $(libraryItem).length == 0 ) {
        $('[data-relation=' + relationship + '][data-action=select-all]').addClass('disabled');
        
    } else if ($(libraryItem).length >= 1) {
        $('[data-relation=' + relationship + '][data-action=select-all]').removeClass('disabled');
    }
    
    if ( $(chosenItem + ':selected').length == 0 ) {
        $('[data-relation=' + relationship + '][data-action=remove]').addClass('disabled');
    } else if ($(chosenItem + ':selected').length >= 1) {
        $('[data-relation=' + relationship + '][data-action=remove]').removeClass('disabled');
    }
    
    if ( $(chosenItem).length == 0 ) {
        $('[data-relation=' + relationship + '][data-action=remove-all]').addClass('disabled');
        
    } else if ($(chosenItem).length >= 1) {
        $('[data-relation=' + relationship + '][data-action=remove-all]').removeClass('disabled');
    }
    
}

$(document).ready(function() {
    
windowH = $(window).outerHeight();
headerH = $('.site-header').outerHeight() + $('.support-nav').outerHeight();
footerH = $('footer').outerHeight();
    
    //enablingToggleBtn('associacaoItens');

//FORMS =================

    // Garantir funcionamento dos Placeholers html5 no IE9 ou menor
    $(function(){var a=document.createElement("input");"placeholder"in a==0&&$("[placeholder]").focus(function(){var a=$(this);a.val()==a.attr("placeholder")&&(a.val("").removeClass("placeholder"),a.hasClass("password")&&(a.removeClass("password"),this.type="password"))}).blur(function(){var a=$(this);(""==a.val()||a.val()==a.attr("placeholder"))&&("password"==this.type&&(a.addClass("password"),this.type="text"),a.addClass("placeholder").val(a.attr("placeholder")))}).blur().parents("form").submit(function(){$(this).find("[placeholder]").each(function(){var a=$(this);a.val()==a.attr("placeholder")&&a.val("")})})});

    
    // FUNÇÕES PARA A CHECKBOX TREE VIEW
    
    $('.tree input').on("change", function(){
        
        
        if($(this).is(":checked")){
            
            $(this).parent().addClass('active');// ativa o seu próprio .tree-item
            
            if ($(this).hasClass('marcaTodos')) {
                $(this).parent().find('li').addClass('active');// ativa todos os .tree-item de seu primeiro .tree-branch pai
                $(this).parent().find('input').prop('checked' , true);// marca todos os input de seu primeiro .tree-branch pai
            }
            
        } else {
            
            $(this).parent().removeClass('active');// ativa o seu próprio .tree-item
            $(this).parents('.tree-branch').removeClass('active');// ativa o seu próprio .tree-item
            $(this).parents('.tree-branch').find('.marcaTodos:eq(0)').prop('checked' , false);// desmarca todos os .marcaTodos de seus .tree-branch pais
            
            if ($(this).hasClass('marcaTodos')) {
                $(this).parent().find('li').removeClass('active');// ativa todos os .tree-item de seu primeiro .tree-branch pai
                $(this).parent().find('input').prop('checked' , false);// desmarca todos os inputm de seu primeiro .tree-branch pai
            }
            
        }
    });
    
    
    
    $('button[type=reset]').on("click", function() {
        $('.active').removeClass('active');
    });
    
    //Função para relationship boxes
    
    //função generica principal

    var undoList = []; // armazenará as options para uma função desfazer
    var boxWidth; // armazenará as larguras das select[multiple]
    var relation; // armazenará o nome da relationship utilizada

    $('.undo').on('click', function(){
        
        var undoing = undoList.pop();
        
        undoing.each(function(){
            if ($(this).hasClass('picked')) {

                $(this).animate({"margin-left": "-=" + boxWidth + "px"}, "fast", function(){ //inicia a animação de saída decrementando a margin-left atual com o valor armazenado na var boxWidth e retorna função
                                $('.library[data-relation=' + relation + ']').prepend($(this)); //insere ao fim do elemento select com a classe selected pertencente à mesma relationship os options armazenados na var 
                                sortSelect("library");
                                enablingToggleBtn(relation);
                                $(this).toggleClass('picked').css("margin-left", boxWidth + "px").animate({"margin-left": "0px"}, "fast"); // seta a margin-left com o valor armazenado na var boxWidth negativo e inicia a animação de entrada
                        });

            } else if ($(this).hasClass('removed')) {

                $('.selected[data-relation=' + relation + ']').prepend($(this)); //insere ao fim do elemento select com a classe selected pertencente à mesma relationship os options armazenados na var 
                sortSelect("selected");
                enablingToggleBtn(relation);
                $(this).toggleClass('removed picked').css("margin-left", boxWidth + "px").animate({"margin-left": "0px"}, "fast"); // seta a margin-left com o valor armazenado na var boxWidth negativo e inicia a animação de entrada

            } else {
                $(this).animate({"margin-left": "+=" + boxWidth + "px"}, "fast", function(){ //inicia a animação de saída incrementando a margin-left atual com o valor armazenado na var boxWidth e retorna função
                    $('.selected[data-relation=' + relation + ']').prepend($(this)); //insere ao fim do elemento select com a classe selected pertencente à mesma relationship os options armazenados na var 
                    sortSelect("selected");
                    enablingToggleBtn(relation);
                    $(this).toggleClass('picked').css("margin-left", "-" + boxWidth + "px").animate({"margin-left": "0px"}, "fast"); // seta a margin-left com o valor armazenado na var boxWidth negativo e inicia a animação de entrada

                });
            }

        });
        
        if(undoList[0] === undefined) {
            $(this).fadeOut();
        }
        

    });


    $('select.easy[data-relation]').on("change", function(){ // dispara a função ao selecionar um ou mais itens
        relation = $(this).attr('data-relation'); // armazena o nome da relationship utilizada
        
        
        if($(this).hasClass('relation-filter')){
            // função para definição de relações
            var newRelation = $(this).val();
            
            $('select.easy[data-relation=' + relation + ']').attr('data-relation', newRelation);
            $('.btn[data-relation=' + relation + ']').attr('data-relation', newRelation);
            
        } else {
            var box = $(this); // a select cujo o evento foi disparado
            var boxId = box.attr('id'); // o ID da select cujo o evento foi disparado
            boxWidth = $(this).outerWidth(); // armazena a largura da caixa da select
            var selectedItem = $('#' + boxId + ' option:selected'); // armazena os elementos selecionados

            
            //selectedItem.each(function() {
            jQuery.each(selectedItem, function() {

                if($('#' + boxId).hasClass('library')) { // se a option tem a mesma relation da caixa e se a caixa tiver a classe library, ou seja, se for a posição inicial dos itens

                    $(this).prop('selected', false)  // deseleciona os elementos selecionados
                        .animate({"margin-left": "+=" + boxWidth + "px"}, "fast", function(){ //inicia a animação de saída incrementando a margin-left atual com o valor armazenado na var boxWidth e retorna função
                            $('.selected.easy[data-relation=' + relation + ']').prepend($(this)); //insere ao fim do elemento select com a classe selected pertencente à mesma relationship os options armazenados na var 
                            sortSelect("selected");
                            $(this).toggleClass('picked').css("margin-left", "-" + boxWidth + "px").animate({"margin-left": "0px"}, "fast"); // seta a margin-left com o valor armazenado na var boxWidth negativo e inicia a animação de entrada
                            //console.log($(this).attr('data-relation') + "; " + $(this).parent().attr('id') + "; " + boxId + "; " + selectedItem.attr('data-relation') + "; " + selectedItem.val() + "; " + relation + ";")
                    });

                    $('.undo').fadeIn();

                } else if (box.hasClass('selected') && $(this).attr('data-relation') == relation) {

                    $(this).prop('selected', false)  // deseleciona os elementos selecionados
                        .animate({"margin-left": "-=" + boxWidth + "px"}, "fast", function(){ //inicia a animação de saída decrementando a margin-left atual com o valor armazenado na var boxWidth e retorna função
                            $('.library.easy[data-relation=' + relation + ']').prepend($(this)); //insere ao fim do elemento select com a classe selected pertencente à mesma relationship os options armazenados na var 
                            sortSelect("library");
                            $(this).toggleClass('picked').css("margin-left", boxWidth + "px").animate({"margin-left": "0px"}, "fast"); // seta a margin-left com o valor armazenado na var boxWidth negativo e inicia a animação de entrada
                    });

                    $('.undo').fadeIn();

                } else if (box.hasClass('selected') && $(this).attr('data-relation') != relation && box.attr('data-relation') !== undefined) {

                    $(this).prop('selected', false)  // deseleciona os elementos selecionados
                        .animate({"margin-left": "+=" + boxWidth + "px"}, "fast", function(){ //inicia a animação de saída decrementando a margin-left atual com o valor armazenado na var boxWidth e retorna função
                            $(this).toggleClass('picked').addClass('removed').remove(); //insere ao fim do elemento select com a classe selected pertencente à mesma relationship os options armazenados na var 
                        });

                    $('.undo').fadeIn();
                }
            });
        }
    });

    $('select[data-relation]').on("change", function(){
        if (!$(this).hasClass('easy')) {
            relation = $(this).attr('data-relation'); // armazena o nome da relationship utilizada
        }
            enablingToggleBtn(relation);
    });
    
    $('[data-relation][data-action]').on("click", function(){

        relation = $(this).attr('data-relation'); // armazena o nome da relationship utilizada
        var action = $(this).attr('data-action'); // armazena o tipo de ação selecionada (adicionar todos ou remover todos)
        boxWidth = $('select[multiple][data-relation]').outerWidth(); // armazena a largura da caixa da select
        var isDisabled = $(this).hasClass('disabled');
        
        if ( action == "select" && !isDisabled ) {
            
            var itemList = $('select.library[data-relation=' + relation + '] option:selected'); // armazena todas as options selecionadas na select.library
            
            if (undoList.length == 5) {
                undoList.splice(0,1)
            }
            undoList.push(itemList);
            
            itemList.each(function(){
                $(this).prop('selected', false) // desseleciona as options selecionadas
                    .animate({"margin-left": "+=" + boxWidth + "px"}, "fast", function(){ // inicia animação de saída e retorna função
                        $('.selected[data-relation=' + relation + ']').prepend($(this)); // insere a option selecionada na select.selected
                        sortSelect("selected"); // ordena as options pelo value
                        enablingToggleBtn(relation);
                        $(this).toggleClass('picked').css("margin-left", "-" + boxWidth + "px") // altera os estilos das options para mantê-los escondidos
                            .animate({"margin-left": "0px"}, "fast"); // inicia a animação de entrada
                    });
            });
                
            $('.undo').fadeIn();
            
        } else if( action == "select-all" && !isDisabled ) { // se a ação for adicionar todos
            
            var itemList = $('select.library[data-relation=' + relation + '] option'); // armazena todas as options na select.library
            
            if (undoList.length == 5) {
                undoList.splice(0,1)
            }
            undoList.push(itemList);
            
            itemList.each(function(){
                $(this).prop('selected', false) // desseleciona as options selecionadas
                    .animate({"margin-left": "+=" + boxWidth + "px"}, "fast", function(){ // inicia animação de saída e retorna função
                        $('.selected[data-relation=' + relation + ']').prepend($(this)); // insere a option selecionada na select.selected
                        sortSelect("selected"); // ordena as options pelo value
                        enablingToggleBtn(relation);
                        $(this).toggleClass('picked').css("margin-left", "-" + boxWidth + "px") // altera os estilos das options para mantê-los escondidos
                            .animate({"margin-left": "0px"}, "fast"); // inicia a animação de entrada
                    });
                
            });

            $('.undo').fadeIn();
            
        } else if( action == "remove" && !isDisabled ) { // se a ação for de remover todos
            
            
            var itemList = $('select.selected option:selected'); // armazena todas as options na select.selected
            
            if (undoList.length == 5) {
                undoList.splice(0,1)
            }
            undoList.push(itemList);
            
            itemList.each(function(){

                if ($(this).attr('data-relation') == relation) {

                    $(this).prop('selected', false)  // deseleciona os elementos selecionados
                        .animate({"margin-left": "-=" + boxWidth + "px"}, "fast", function(){ //inicia a animação de saída decrementando a margin-left atual com o valor armazenado na var boxWidth e retorna função
                            $('.library[data-relation=' + relation + ']').prepend($(this)); //insere ao fim do elemento select com a classe selected pertencente à mesma relationship os options armazenados na var 
                            sortSelect("library");
                            enablingToggleBtn(relation);
                            $(this).toggleClass('picked').removeClass('removed').css("margin-left", boxWidth + "px").animate({"margin-left": "0px"}, "fast"); // seta a margin-left com o valor armazenado na var boxWidth negativo e inicia a animação de entrada

                    });

                } else {
                
                    $(this).prop('selected', false)  // deseleciona os elementos selecionados
                        .animate({"margin-left": "+=" + boxWidth + "px"}, "fast", function(){ //inicia a animação de saída decrementando a margin-left atual com o valor armazenado na var boxWidth e retorna função
                            $(this).toggleClass('picked').addClass('removed').remove(); //remove os options
                        });

                } // checking relation

                
            }); // itemList.each

            $('.undo').fadeIn();
                
        } else if( action == "remove-all" && !isDisabled ) { // se a ação for de remover todos
            
            
            var itemList = $('select.selected option'); // armazena todas as options na select.selected
            
            if (undoList.length == 5) {
                undoList.splice(0,1)
            }
            undoList.push(itemList);
            
            itemList.each(function(){

                if ($(this).attr('data-relation') == relation) {

                    $(this).prop('selected', false)  // deseleciona os elementos selecionados
                        .animate({"margin-left": "-=" + boxWidth + "px"}, "fast", function(){ //inicia a animação de saída decrementando a margin-left atual com o valor armazenado na var boxWidth e retorna função
                            $('.library[data-relation=' + relation + ']').prepend($(this)); //insere ao fim do elemento select com a classe selected pertencente à mesma relationship os options armazenados na var 
                            sortSelect("library");
                            enablingToggleBtn(relation);
 $(this).toggleClass('picked').removeClass('removed').css("margin-left", boxWidth + "px").animate({"margin-left": "0px"}, "fast"); // seta a margin-left com o valor armazenado na var boxWidth negativo e inicia a animação de entrada

                    });

                } else {
                
                    $(this).prop('selected', false)  // deseleciona os elementos selecionados
                        .animate({"margin-left": "+=" + boxWidth + "px"}, "fast", function(){ //inicia a animação de saída decrementando a margin-left atual com o valor armazenado na var boxWidth e retorna função
                            $(this).toggleClass('picked').addClass('removed').remove(); //remove os options
                        });

                } // checking relation

                
            }); // itemList.each

            $('.undo').fadeIn();
                
        }

    }); // fim da função de adicionar ou remover
    


// TAGBOX =====================
    //função principal: adicionar as tags
$('.tagbox input').on('keyup', function() { //ao inserir um novo caractere no campo dispara a função
    
    var tagValue = $(this).val(); // armazena o valor encontrado no campo
    var valueTotalChar = tagValue.length; // armazena a quantidade de caraceters do valor encontrado no campo
    var realTagValue = tagValue.substring(0, valueTotalChar - 1); // armazena o valor final
    var realValueTotalChar = realTagValue.length; // armazena a quantidade de caraceters do valor final
    
    if (realTagValue.indexOf(',') === -1 && realTagValue.indexOf(' ') === -1 && realValueTotalChar > 0) {
        
        if(!(tagValue.indexOf(',') === -1 && tagValue.indexOf(' ') === -1) ) { //se no valor do campo existe ',' (vírgula) ou ' ' (espaço)
        
            //alert("Valor inicial do campo: " + tagValue + "; Total de Caracteres: " + valueTotalChar + "; Valor Final do campo: " + realTagValue + "; Total de Caracteres Final: " + realTagValue.length);

            var container = $(this).parent('.tagbox').find('.tag-cloud'); // armazena o elemento .tag-cloud

            if (container[0] == undefined){ // se não existir o elemento .tag-cloud (que conterá as tags)
                $('<div class="tag-cloud" style="margin-top:-22px;"></div>').prependTo('div.tagbox').animate({marginTop: "0px"}, "fast"); // insere o .tag-cloud à .tagbox
                container = $(this).parent('.tagbox').find('.tag-cloud'); // atualiza a variável com o elemento .tag-cloud criado
            }

            tagValue = tagValue.replace(',' , ''); // remove o caractere ',' (vírgula) do valor
            tagValue = tagValue.replace(' ' , ''); // remove o caractere ' ' (espaço) do valor

            $('<span class="btn tagbox-tag" style="margin-top:-150px; margin-bottom:0px; margin-left: -10px; margin-right: 0px; font-size: 0px; padding: 0; ">' + tagValue + '<i class="material-icons last">&#xE15D;</i> </span>').prependTo(container).animate({
                                marginTop: "0px",
                                marginBottom: "5px",
                                marginLeft: "0px",
                                marginRight: "5px",
                                padding: "15px",
                                fontSize: "16px"
                            }, "fast"); // insere o .tagbox-tag com o texto igual ao valor armazenado na variável tagValue e executa a animação de entrada

            $(this).val(""); // limpa o valor do campo

        }
    }
});
    
    $('.tagbox').on("click", ".tagbox-tag", function() { // ao clicar numa .tagbox-tag
        $(this).fadeOut("slow", function(){ $(this).remove(); }); // remove o elemento clicado
    });
    
    var form;

    $('.tagbox').parents('form').find('.btn-primary').on("click", function(){ // ao submeter o formulario
        var tag; // cria a variável tag
        var tagBoxValue = []; // cria o array tagBoxValue
        
        form = $(this).parents('form'); // armazena o formulario pai do botão clicado na variável form
        form.find('.tagbox-tag').each(function(){ // para cada .tagbox-tag encontrada dentro do formulario pai do botão clicado
            
            tag = $(this).text().replace(//g , ''); //armazena na variável tag o texto da .tagbox-tag removendo o caractere do ícone
            tagBoxValue.push(tag) // insere o valor armazenado na variável tag como um novo valor do array tagBoxValue

        });

        form.find('input').val("");
        $('#codigoAssociado').remove(); // remove qualquer input hidden já existente na tela
        
        if(tagBoxValue.length > 0){
            form.prepend('<input id="codigoAssociado" type="hidden" value="' + tagBoxValue + '">'); // insere no formulario o input hidden com os valores armazenados no array tagBoxValue 
        }
        
        
    });

    
    // resize functions

    actionBarResize();
    viewBarResize();
    panelGridResize();

    $(window).resize(function(){
        
        actionBarResize();
        viewBarResize();
        panelGridResize();

    });
            
    $('a[data-toggle="collapse-grid"]').on("click", function(event){
           
        event.preventDefault();
        var targetPanelId = $(this).attr('href');
        
        if($(targetPanelId).attr('aria-expanded') == "false") {
            
            maxHeight = 0;
            
            $(this).parents(".panel-grid").find('.panel-body').each(function () {
                $this = $(this);
                
                if ( $this.outerHeight() > maxHeight ) {
                    highestElem = this;
                    maxHeight = $this.outerHeight();
                }
            });
            
            $(targetPanelId).addClass('in').css('height', maxHeight).attr('aria-expanded', 'true');
        
        } else {
            $(targetPanelId).removeClass('in').attr('aria-expanded', 'false').removeAttr('style');

        }

    });
    
    $('.panel-select > .panel-heading .icon-span > .material-icons').on("click", function(){
        if (!($(this).parents('.panel-default').hasClass('selected'))) {
            $(this).html('&#xE834;').parents('.panel-default').addClass('selected');
            
        } else {
            $(this).html('&#xE835;').parents('.panel-default').removeClass('selected');
            
        }
    });
    
    // viewbar functions
    
    var view = $('.view-title').text();
    
    $('#viewbar > .nav > li > a').each(function(){

        var activeView = $(this).text();

        if (view == activeView) {
            $(this).parent("li").addClass('active');
        } else if ($(this).parent(".dropdown")) {
            $('a:contains(' + view + ')')
                .parent("li")
                .addClass('active')
                .addClass('open');
        }
            
    });
        
     $('#viewbar .dropdown a').on("click", function(){
           
        $(this).parent(".dropdown").toggleClass('open');
         
     });
            
    
    //Essa função só serve para a biblioteca de componentes 
    $('#viewbar .nav li a').on("click", function(){
        
        var isDropdown = $(this).parent("li").hasClass('dropdown');

        if (! isDropdown) {
            $('#viewbar .nav li').removeClass('active');
            $(this).parent("li").addClass('active');
        }
    });

    
//DATETIMEPICKER PLUGIN ==========================

// para campos apenas de data utilize a classe .datepicker
$('.datepicker').datetimepicker({
  lang:'pt',
  timepicker:false,
  format:'d/m/Y',
});

// para campos apenas de hora utilize a classe .timepicker
$('.timepicker').datetimepicker({
  lang:'pt',
  datepicker:false,
  format:'h:m',
});

// DATATOGGLE FUNCTIONS ===========================
    
$('.input-group [data-toggle="collapse"]').on("click", function(){
    if($(this).attr("aria-expanded") == "true") {
        $(this).find('i').html('&#xE5D0;');
        $(this).find('span').text('Abrir');
        $(this).parent().find('small').fadeOut();
    } else {
        $(this).find('i').html('&#xE5CD;');
        $(this).find('span').text('Fechar');
        $(this).parent().find('small').fadeIn();
    }
});

$('.btn-group .btn').on('click', function(){
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
});
    
    //Essa função só serve para a biblioteca de componentes 
    $('.chosen').css('display', 'inline');
    $('.unchosen').css('display', 'none');

    $('[data-toggle="code-board"]').on("click", function(){
        $(this).toggleClass('selected').parent('.code-board').find('.option').toggleClass('chosen').slideToggle( );
        
        if($(this).hasClass('selected')) {
            $(this).find('i').html('&#xE834;');
        } else {
            $(this).find('i').html('&#xE835;');
        }
        
    });
    
$('.btn.btn-clear').on('click', function(){
    var target = $(this).attr('href');

    $(target).find('input').val('');
    $(target).find('select').val('');
    $(target).find('.tagbox-tag').remove();
    $(target).find('.tag-cloud').remove();
    $(target).find('select.selected option').remove();

});
        
    //Essa função só serve para a biblioteca de componentes 
    $('pre').each(function(){
        var preHeight = $(this).outerHeight();
        
        $(this).css('height' , preHeight)
        
    });

// DATATABLE FUNCTIONS ===========================
    $('.data-table input[type=checkbox], .data-table input[type=radio]').parent('td').css('width', '32px');

    $('.data-table input[type=checkbox], .data-table input[type=radio]').on("change", function(){
        if ($(this).attr("type") == "radio") {
            $(this).parents('table').find('tr').removeClass('active');
        }
        
        if ($(this).is(":checked")) {
            $(this).parents('tr').addClass('active');
        } else {
            $(this).parents('tr').removeClass('active');
            
        }
    });
    
// CHAT FUNCTIONS ===========================
    
    $('.chat-write').on("keyup", function(){
        if ($(this).val() != "") {
            $('.chat-send').removeClass('disabled');
        } else {
            $('.chat-send').addClass('disabled');
        }
    })
    
    $('.chat-send').on("click", function(){
        if (!$(this).hasClass('disabled')) {
            var dt = new Date();
            var sentTime = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
            var message = $('.chat-write').val();
            $('.chat-history .chat-msg').append('<div class="my-msg col-md-8">' + message + '<br><small class="pull-right">' + sentTime + '</small> <span class="caret"></span></div>');
            var scrollIndex = $('.chat-history .chat-msg').outerHeight();
            $('.chat-history').scrollTop(scrollIndex);
            $('.chat-write').val("");
            $('.chat-send').addClass('disabled');

        }
        
    })

// SCROLL FUNCTIONS ===========================
        var actionTopFixing;
        var topFixed;
        var stickyHeaderH;
        var indexScroll;
        var supportNavH;
    
    $(window).scroll(function(){
        
        indexScroll = $(this).scrollTop();
        supportNavH = $('.support-nav').outerHeight();
        
        if (indexScroll == 0) {
            ////console.log("scroll zero");
            $('.site-header').animate().stop(true).removeClass('affix').removeAttr("style");
            $('.support-nav').animate().stop(true).removeAttr("style");
            $('.actionbar, .viewbar').animate().stop(true).removeClass('affix').removeAttr("style");
            
        } else if (indexScroll > 0 && indexScroll <= supportNavH && $('.actionbar, .viewbar').hasClass('affix')) {
            actionTopFixing = supportNavH - indexScroll;
            $('.actionbar, .viewbar').css("top", stickyHeaderH + actionTopFixing);
            
            //console.log('top: ' + stickyHeaderH + actionTopFixing);

        } else if (indexScroll > supportNavH && indexScroll <= headerH && $('.actionbar, .viewbar').hasClass('affix')) {
            $('.actionbar, .viewbar').css("top", stickyHeaderH);
            
        } else if (indexScroll > headerH && !$('.site-header').hasClass('affix')) {
                
            topFixed = -$('.site-header').outerHeight();
            
            $('.site-header').css("top", topFixed).addClass('affix').animate({
                'top': '0px'
            }, 400);
            
            stickyHeaderH = $('.site-header.affix').outerHeight();
            
            $('.support-nav').css("margin-top", 0).animate({
                'marginTop': stickyHeaderH
            }, 400);
            
            $('.actionbar, .viewbar').css("top", topFixed).addClass('affix').animate({
                'top': stickyHeaderH
            }, 400);
        }
                                                                                                    
        //console.log('supportNavH: ' + supportNavH);
        //console.log('stickyHeaderH: ' + stickyHeaderH);
        //console.log('headerH: ' + headerH);
        //console.log('scroll: ' + indexScroll);
        //console.log('actionTopFixing: ' + actionTopFixing);

    })
    
    $('a.scroller').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 200, 'swing', function () {
	        window.location.hash = target;
	    });

	});
    
    $('#backToTop').on('click',function (e) {
        e.preventDefault();

	    $('html, body').stop().animate({
	        'scrollTop': 0
	    }, 200, 'swing');

    });

    
});