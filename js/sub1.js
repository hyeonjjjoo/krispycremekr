$(function(){
    $('.cntWrap li').click(function(){
        $('.cntWrap li').removeClass('on')
        $(this).addClass('on')
    });
});