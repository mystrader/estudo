//HOTKEYS FUNCTIONS ====================================
function domo(){
    jQuery('#platform-details').html('<code>' + navigator.userAgent + '</code>');

    var elements = [
                        "esc","tab","space","return","backspace","scroll","capslock","numlock","insert","home","del","end","pageup","pagedown",
                        "left","up","right","down",
                        "f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12",
                        "1","2","3","4","5","6","7","8","9","0",
                        "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                        "Ctrl+a","Ctrl+b","Ctrl+c","Ctrl+d","Ctrl+e","Ctrl+f","Ctrl+g","Ctrl+h","Ctrl+i","Ctrl+j","Ctrl+k","Ctrl+l","Ctrl+m",
                        "Ctrl+n","Ctrl+o","Ctrl+p","Ctrl+q","Ctrl+r","Ctrl+s","Ctrl+t","Ctrl+u","Ctrl+v","Ctrl+w","Ctrl+x","Ctrl+y","Ctrl+z",
                        "Shift+a","Shift+b","Shift+c","Shift+d","Shift+e","Shift+f","Shift+g","Shift+h","Shift+i","Shift+j","Shift+k","Shift+l",
                        "Shift+m","Shift+n","Shift+o","Shift+p","Shift+q","Shift+r","Shift+s","Shift+t","Shift+u","Shift+v","Shift+w","Shift+x",
                        "Shift+y","Shift+z",
                        "Alt+a","Alt+b","Alt+c","Alt+d","Alt+e","Alt+f","Alt+g","Alt+h","Alt+i","Alt+j","Alt+k","Alt+l",
                        "Alt+m","Alt+n","Alt+o","Alt+p","Alt+q","Alt+r","Alt+s","Alt+t","Alt+u","Alt+v","Alt+w","Alt+x","Alt+y","Alt+z",
                        "Ctrl+esc","Ctrl+tab","Ctrl+space","Ctrl+return","Ctrl+backspace","Ctrl+scroll","Ctrl+capslock","Ctrl+numlock",
                        "Ctrl+insert","Ctrl+home","Ctrl+del","Ctrl+end","Ctrl+pageup","Ctrl+pagedown","Ctrl+left","Ctrl+up","Ctrl+right",
                        "Ctrl+down",
                        "Ctrl+f1","Ctrl+f2","Ctrl+f3","Ctrl+f4","Ctrl+f5","Ctrl+f6","Ctrl+f7","Ctrl+f8","Ctrl+f9","Ctrl+f10","Ctrl+f11","Ctrl+f12",
                        "Shift+esc","Shift+tab","Shift+space","Shift+return","Shift+backspace","Shift+scroll","Shift+capslock","Shift+numlock",
                        "Shift+insert","Shift+home","Shift+del","Shift+end","Shift+pageup","Shift+pagedown","Shift+left","Shift+up",
                        "Shift+right","Shift+down",
                        "Shift+f1","Shift+f2","Shift+f3","Shift+f4","Shift+f5","Shift+f6","Shift+f7","Shift+f8","Shift+f9","Shift+f10","Shift+f11","Shift+f12",
                        "Alt+esc","Alt+tab","Alt+space","Alt+return","Alt+backspace","Alt+scroll","Alt+capslock","Alt+numlock",
                        "Alt+insert","Alt+home","Alt+del","Alt+end","Alt+pageup","Alt+pagedown","Alt+left","Alt+up","Alt+right","Alt+down",
                        "Alt+f1","Alt+f2","Alt+f3","Alt+f4","Alt+f5","Alt+f6","Alt+f7","Alt+f8","Alt+f9","Alt+f10","Alt+f11","Alt+f12"
                    ];

    // the fetching...
    //$.each(elements, function(i, e) { // i is element index. e is element as text.
    //var newElement = ( /[\+]+/.test(elements[i]) ) ? elements[i].replace("+","_") : elements[i];
    //});

        //var holdDown = $(document).bind('keydown', 'del', function assets() {return true});

        // Binding keys
        $(document).bind('keydown', 'del', function assets() {
           $('tr.active').remove();
            $('.multi-function.delete').fadeOut();
           return false;

        });

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

$(document).ready(function() {

    
//FORMS =================

    // Garantir funcionamento dos Placeholers html5 no IE9 ou menor
    $(function(){var a=document.createElement("input");"placeholder"in a==0&&$("[placeholder]").focus(function(){var a=$(this);a.val()==a.attr("placeholder")&&(a.val("").removeClass("placeholder"),a.hasClass("password")&&(a.removeClass("password"),this.type="password"))}).blur(function(){var a=$(this);(""==a.val()||a.val()==a.attr("placeholder"))&&("password"==this.type&&(a.addClass("password"),this.type="text"),a.addClass("placeholder").val(a.attr("placeholder")))}).blur().parents("form").submit(function(){$(this).find("[placeholder]").each(function(){var a=$(this);a.val()==a.attr("placeholder")&&a.val("")})})});

    //fieldset functions
    $('input.marcaTodos').on('click', function(){ //marcar e desmarcar todos
        
        if ($(this).is(":checked")) {
            $(this).parents('.input-group').find('input').prop('checked', true); // todos os inputs do grupo
            $(this).parents('.input-group').find('.btn').addClass('active'); // todos os inputs do grupo
            $(this).parents('.btn').removeClass('active'); //input.marcaTodos
            $(this).parents('.input-group').addClass('active'); //input-group
        } else {
            $(this).parents('.input-group').find('input').prop('checked', false); // todos os inputs do grupo
            $(this).parents('.input-group').find('.btn').removeClass('active'); // todos os inputs do grupo
            $(this).parents('.btn').addClass('active'); //input.marcaTodos
            $(this).parents('.input-group').removeClass('active'); //input-group
        }

    });
    
    
    $('.checkbox-inline .btn input[type=checkbox], .checkbox-inline .btn input[type="radio"]').on("change", function(){ //setar a classe active no input clicado
        
        $(this).parent('.btn').toggleClass('active');//seta a classe active no input clicado
        
        var groupChecker = $(this).parents('.input-group').find('input.marcaTodos'); //armazena o input geral do grupo clicado
        
        if(groupChecker.is(":checked")){ // se o input geral do grupo clicado estiver marcado...
            $(this).parents('.input-group').removeClass('active').find('input.marcaTodos').prop('checked', false); // desmarca o input geral do grupo clicado e remove a classe active do grupo
        }
        
    });
    
    $('button[type=reset]').on("click", function() {
        $('.active').removeClass('active');
    });

    panelGridResize();

    $(window).resize(function(){
        
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

    //Evitar que os dropdowns clicados vão para o topo da tela
    $('.dropdown a').on("click", function(event){
           
        //event.preventDefault();
         
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
    
    // dropdown functions
//    $('[data-toggle="dropdown"]').on("click", function(){
//        
//        
//        if ($(this).attr('aria-expanded') == 'true' ){
//            $(this).parent('.dropdown').removeClass('open');
//            $(this).attr('aria-expanded', 'false');
//            event.stopPropagation();
//
//        } else {
//            $('.dropdown').removeClass('open');
//            $('[data-toggle="dropdown"]').attr('aria-expanded', 'false');
//            $(this).parents('.dropdown').addClass('open');
//            $(this).attr('aria-expanded', 'true');
//            event.stopPropagation();
//
//        }
//    
//    });
    
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


});