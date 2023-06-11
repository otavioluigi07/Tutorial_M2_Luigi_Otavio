
// Alterações com JQUERY - Eventos e ações
var $j = jQuery.noConflict();
$j(document).ready(function() {
    $j('#container').fadeOut("3000").fadeIn("3000")
    $j('#container').fadeOut("3000").fadeIn("3000")
        $j('#container').fadeOut("3000").fadeIn("3000")
        $j('*').css({'font-family':'Calibri'})
        $j('.link').on('click', botao)
    });

    function botao(){
        $j('body').css({'background':'rgb(212, 158, 241)'})
    }

