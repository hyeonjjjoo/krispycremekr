$(function(){

    $('.boxLeft').click(function(){
        $(this).toggleClass('on')
    });
    $('.ser li').click(function(){
        var txt = $(this).text()
        $('.boxLeft h4').text(txt);
    });

    var li = $('.mapBox li');
    li.click(function(){
        li.removeClass('on');
        $(this).addClass('on');
    });
    var tab = $('.tab li');
    tab.click(function(){
        tab.removeClass('on');
        $(this).addClass('on');
    });
    
});