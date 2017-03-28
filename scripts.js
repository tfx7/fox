/*
// [F]ox Design | 2010 - 2013
// Copyrights(c) 2013 - Wagner Souza
// Proibida a cópia ou reprodução de qualquer conteúdo deste site.
//----------------------------------------------------------------
// Email: wagner_junior@rocketmail.com
// Skype: wagh_cwb
//----------------------------------------------------------------
*/
jQuery(document).ready(function(){
var beforeload = (new Date()).getTime();
function getPageLoadTime(){
        var afterload = (new Date()).getTime();
        seconds = (afterload-beforeload) / 1000;
        jQuery('#load_time').text('Tempo de carregamento:  ' + seconds + ' sec(s).');
}
	window.onload = getPageLoadTime;
});

/*jQuery(document).scroll(function() {
    var fixed = false;
    if( jQuery(this).scrollTop() > 100 ) {
        if( !fixed ) {
            fixed = true;
            jQuery('#scroll_header').slideDown(600);
            jQuery('header').slideUp(500);
        } else {
            fixed = false;
            jQuery('#scroll_header').slideUp(600);
            jQuery('header').slideDown(500);
        }
    } else {
        if( fixed ) {
            fixed = false;
            jQuery('#scroll_header').slideUp(600);
            jQuery('header').slideDown(500);
        } else {
            fixed = true;
            jQuery('#scroll_header').slideDown(600);
            jQuery('header').slideUp(500);
        }    
    }
});*/