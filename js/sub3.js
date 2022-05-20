$(function(){

    $('.boxLeft').click(function(){
        $(this).toggleClass('on')
    });
    $('.ser li').click(function(){
        var txt = $(this).text()
        $('.boxLeft h4').text(txt);
    });
    
});